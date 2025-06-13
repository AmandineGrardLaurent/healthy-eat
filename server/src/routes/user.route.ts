import express from "express";
import { hashPassword } from "../middlewares/argon.middleware";
import { checkEmailUnique } from "../middlewares/checkEmailUnique.middleware";
import { add } from "../modules/user/userActions";

const router = express.Router();

router.post("/api/user", checkEmailUnique, hashPassword, add);
// vérifier les données
// vérifier que le pseudo n'est pas déjà présent dans la bdd

export default router;
