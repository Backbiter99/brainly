import express, { NextFunction, Request, Response } from "express";
import { string, z } from "zod";
import { Content, Link, User } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

import dotenv from "dotenv";
import { userMiddleware } from "./middleware";
import { CustomRequest } from "./types";
import mongoose from "mongoose";
import { hashGenerate } from "./utils";
dotenv.config();

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const signupInput = z.object({
    username: string().min(3).max(10),
    password: string()
        .min(8)
        .max(20)
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
});

app.post("/api/v1/signup", async (req: Request, res: Response) => {
    const parsedSignupInput = signupInput.safeParse(req.body);
    if (!parsedSignupInput.success) {
        res.status(411).json({ error: "error in inputs" });
        console.log("Error in Inputs");
        return;
    }
    const { username, password } = parsedSignupInput.data;

    try {
        const salt_rounds = parseInt(
            process.env.BCRYPT_SALT_ROUNDS || "10",
            10
        );
        const hashedPassword = await bcrypt.hash(password, salt_rounds);
        await User.create({
            username: username,
            password: hashedPassword,
        });

        res.status(200).json({ message: "user signed up" });
    } catch (error) {
        console.error("Error during signup: ", error);

        res.status(403).json({ error: "user already exists" });
    }
});

app.post("/api/v1/signin", async (req, res) => {
    const parsedSigninInput = signupInput.safeParse(req.body);
    if (!parsedSigninInput.success) {
        res.status(403).json({
            message: "wrong username or password",
        });
        return;
    }
    try {
        const { username, password } = parsedSigninInput.data;

        const user = await User.findOne({
            username,
        });

        if (!user) {
            console.log("user is null");

            res.status(403).json({
                message: "incorrect credentials",
            });
            return;
        }

        const hashedPassword = user.password;

        const check = await bcrypt.compare(password, hashedPassword);

        if (check && user) {
            const token = jwt.sign(
                { id: user._id },
                `${process.env.JWT_Password}`
            );
            res.status(200).json({
                token: token,
            });
        } else {
            res.status(403).json({
                message: "incorrect credentials",
            });
        }
    } catch (error) {
        console.error("Error while signin: ", error);
        res.status(500).json({ error: "internal serval error" });
    }
});

app.post("/api/v1/content", userMiddleware, async (req: CustomRequest, res) => {
    const link = req.body.link;
    const type = req.body.type;

    await Content.create({
        link,
        type,
        title: req.body.title,
        userId: req.userId,
        tags: [],
    });

    res.json({
        message: "content added",
    });
});

app.get("/api/v1/content", userMiddleware, async (req: CustomRequest, res) => {
    const userId = req.userId;
    const content = await Content.find({
        userId: userId,
    }).populate("userId", "username");

    res.json({ content });
});

app.delete(
    "/api/v1/content",
    userMiddleware,
    async (req: CustomRequest, res) => {
        const contentId = req.body.contentId;

        await Content.deleteMany({
            _id: new mongoose.Types.ObjectId(contentId),
            userId: req.userId,
        });

        res.json({
            message: "Content Deleted",
        });
    }
);

app.post(
    "/api/v1/brain/share",
    userMiddleware,
    async (req: CustomRequest, res) => {
        const share = req.body.share;
        console.log(`value of share is ${share}`);

        if (share === "true") {
            const existingLink = await Link.findOne({
                userId: req.userId,
            });
            if (existingLink) {
                res.json({
                    link: existingLink.hash,
                });
                return;
            }
            const hash = hashGenerate(10);
            await Link.create({
                userId: req.userId,
                hash: hash,
            });

            res.json({
                link: hash,
            });
            return;
        } else {
            await Link.deleteOne({
                userId: req.userId,
            });
            res.json({
                message: "Removed Link",
            });
        }
    }
);

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await Link.findOne({
        hash,
    });

    if (!link) {
        res.status(411).json({
            msg: "no link found",
        });
        return;
    }

    try {
        const content = await Content.find({
            userId: link.userId,
        });

        const user = await User.findOne({
            _id: link.userId,
        });

        res.json({
            username: user?.username,
            content: content,
        });
    } catch (error) {
        console.error("Error while sharing link", error);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
