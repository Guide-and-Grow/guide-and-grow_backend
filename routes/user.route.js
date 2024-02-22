import { Router } from "express";
import { postApiSignup, postApiLogin } from "../controllers/user.controller.js";
const router = Router();

router.post("/signup", postApiSignup);

router.post("/login", postApiLogin);

export default router;
