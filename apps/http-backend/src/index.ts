

import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { authMiddleWare } from "./middleware";

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
  // Handle signup logic
  res.send("User signed up");
});

app.post("/signin", (req, res) => {
  // Handle signin logic
  const userId = req.body.userId; // Assume userId is obtained after validating user credentials
    const jwtToken = jwt.sign({ userId }, JWT_SECRET, );
  res.send("User signed in with token: " + jwtToken);
});

app.post("/room",authMiddleWare, (req, res) => {
  // Handle room creation logic
  res.send("Room created");
});

app.listen(3000);