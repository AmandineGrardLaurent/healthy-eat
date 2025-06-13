import express from "express";
import { hashPassword } from "../middlewares/argon.middleware";
import { checkEmailUnique } from "../middlewares/checkEmailUnique.middleware";
import { checkPseudoUnique } from "../middlewares/checkPseudoUnique.middleware";
import { add } from "../modules/user/userActions";

const router = express.Router();

router.post(
  "/api/user",
  checkEmailUnique,
  checkPseudoUnique,
  hashPassword,
  add,
);
// vérifier les données

export default router;
