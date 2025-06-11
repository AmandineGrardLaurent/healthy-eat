import express from "express";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post("/api/user", userActions.add);

export default router;
