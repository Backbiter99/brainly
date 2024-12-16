import mongoose, { Schema, model } from "mongoose";

import dotenv from "dotenv";

dotenv.config();
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined.");
}

mongoose
  .connect(`${process.env.DATABASE_URL}` + `/brainly`)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const contentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const User = model("User", userSchema);
export const Content = model("Content", contentSchema);
