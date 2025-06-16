import Joi from "joi";

export const schemaDataRegister = Joi.object({
  firstname: Joi.string()
    .max(50)
    .pattern(/^[A-Za-zÀ-ÿ\s-]+$/)
    .required(),
  lastname: Joi.string()
    .max(50)
    .pattern(/^[A-Za-zÀ-ÿ\s-]+$/)
    .required(),
  pseudo: Joi.string().max(50).required(),
  email: Joi.string().email().max(150).required(),
  hash_password: Joi.string()
    .max(255)
    .min(8)
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
    ),
});
