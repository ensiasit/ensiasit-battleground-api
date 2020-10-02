const joi = require("joi");
const { BadRequest } = require("../errors");

const schema = joi.object({
  name: joi.string().min(4).max(40).required(),
  description: joi.string().min(0).max(200).required(),
  logo: joi.string().required(),
  starttime: joi.date().min('now').required(),
  duration: joi.number().positive().required()
});

const contestValidation = async (req, res, next) => {
  try {
    if (["POST", "PUT"].includes(req.method)) {
      await schema.validateAsync(req.body);
    }
    next();
  } catch (err) {
    err = BadRequest(err.message);
    res.status(err.status).send(err.message);
  }
};

module.exports = contestValidation;
