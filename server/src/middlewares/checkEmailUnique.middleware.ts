import type { RequestHandler } from "express";
import userRepository from "../modules/user/userRepository";

export const checkEmailUnique: RequestHandler = async (req, res, next) => {
  try {
    const email = req.body.email;
    const userEmail = await userRepository.findByEmail(email);

    if (userEmail.length !== 0) {
      res.status(422).json({ message: "Email déjà utilisé" });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};
