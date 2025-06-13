import type { RequestHandler } from "express";
import userRepository from "../modules/user/userRepository";

export const checkPseudoUnique: RequestHandler = async (req, res, next) => {
  try {
    const pseudo = req.body.pseudo;
    const userPseudo = await userRepository.findByPseudo(pseudo);

    if (userPseudo.length !== 0) {
      res.status(422).json({ message: "Pseudo déjà utilisé" });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};
