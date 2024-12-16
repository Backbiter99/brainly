import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { CustomRequest } from "./types";
dotenv.config();

interface DecodedToken {
  id: string;
}

export const userMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers["authorization"];
    const jwt_secret = process.env.JWT_Password;

    if (!header || !jwt_secret) {
      res.status(403).json({ error: "Not Authorized" });
      return;
    }
    const decoded = jwt.verify(header, jwt_secret) as DecodedToken;
    console.log("successfully decoded");
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Invalid token: ", error);
    res.status(403).json({ error: "Not Authorized" });
    return;
  }
};
