const joi = require("joi");
const { BadRequest } = require("../errors");

const schema = joi.object({
  name: joi.string().min(4).max(16).required(),
  username: joi
    .string()
    .min(4)
    .max(16)
    .regex(/[a-z0-9\\-]*/)
    .required(),
  password: joi.string().min(8).max(16).required(),
  email: joi.string().email().required(),
});

const judgeValidation = async (req, res, next) => {
  try {
    if (["POST", "PUT"].includes(req.method)) {
      await schema.validateAsync(req.body);
    }
    next();
  } catch (err) {
    next(BadRequest(""));
  }
};

module.exports = judgeValidation;
