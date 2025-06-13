import type { RequestHandler } from "express";
import userRepository from "./userRepository";

export const add: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const insertId = await userRepository.create(user);

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};
