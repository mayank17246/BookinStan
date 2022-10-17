import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();
// req - whatever comes from user while making an api request
// res - what we are sending as an response to the user

router.post("/register", register)
router.post("/login", login)
export default router