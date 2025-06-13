import type { RequestHandler } from "express";
import userRepository from "./userRepository";

export const add: RequestHandler = async (req, res, next) => {
  try {
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      hash_password: req.body.hash_password,
      pseudo: req.body.pseudo,
    };

    const insertId = await userRepository.create(user);

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};
