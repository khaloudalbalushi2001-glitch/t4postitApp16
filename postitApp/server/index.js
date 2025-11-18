import mongoose from "mongoose";
import cors from "cors";
import express from "express";

import UserModel from "./Models/UserModel.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

//Database connection
const connectString =
  "mongodb+srv://user1:mypassword@postitcluster.yvwvqj8.mongodb.net/?appName=PostITCluster";

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/registerUser", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name: name,
      email: email,
      password: hashedpassword,
    });

    await user.save();
    res.send({ user: user, msg: "Added." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3001, () => {
  console.log("You are connected");
});
