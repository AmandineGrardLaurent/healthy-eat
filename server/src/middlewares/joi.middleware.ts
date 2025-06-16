import type { RequestHandler } from "express";
import { schemaDataRegister } from "../schemas/user.schema";

export const validateDataRegister: RequestHandler = async (req, res, next) => {
  const { error } = schemaDataRegister.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details });
  } else {
    next();
  }
};
