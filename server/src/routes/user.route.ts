import express from "express";
import { hashPassword } from "../middlewares/argon2/argon2.middleware";
import { add } from "../modules/user/userActions";

const router = express.Router();

router.post("/api/user", hashPassword, add);

export default router;
