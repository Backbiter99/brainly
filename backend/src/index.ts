import express from "express";
import { string, z } from "zod";
import { User } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const port = 3000;
const app = express();

app.use(express.json());

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

//@ts-ignore
app.post("/api/v1/signup", async (req, res) => {
  const parsedSignupInput = signupInput.safeParse(req.body);
  if (!parsedSignupInput.success) {
    return res.status(411).json({ error: "error in inputs" });
  }
  const username = req.body.username;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      username: username,
      password: hashedPassword,
    });

    res.status(200).json({ message: "user signed up" });
  } catch (error) {
    console.error("Error during signup: ", error);

    return res.status(403).json({ error: "user already exists" });
  }
});

// @ts-ignore
app.post("/api/v1/signin", async (req, res) => {
  const parsedSigninInput = signupInput.safeParse(req.body);
  if (!parsedSigninInput.success) {
    return res.status(403).json({
      message: "wrong username or password",
    });
  }
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
      username,
    });

    //@ts-ignore
    const hashedPassword = user.password;
    const check = await bcrypt.compare(password, hashedPassword);

    if (check && user) {
      const token = jwt.sign({ id: user._id }, `${process.env.JWT_Password}`);
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
    return res.status(500).json({ error: "internal serval error" });
  }
});

app.post("/api/v1/content", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});
app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
