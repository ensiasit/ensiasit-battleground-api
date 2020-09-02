const joi = require("joi");
const { BadRequest } = require("../errors");

const schema = joi.object({
  slug: joi.string().min(3).max(30).regex(/[a-z0-9\\-]*/).required(),
  title: joi.string().min(3).max(30).required(),
  code: joi.string().regex(/[A-Z]/),
  points: joi.number().min(0),
  colour: joi.string().min(2).max(10),
  verification_required: joi.boolean().required(),
  active: joi.boolean().required(),
  allow_submit: joi.boolean().required(),
  text: joi.string().required(),
  time_limit: joi.number(),
  memory_limit: joi.number(),
  compare_script: joi.string(),
  test_cases: joi.array().items(
      joi.object({
          input: joi.string(),
          output: joi.string(),
          description: joi.string()
      })
  )
});

const problemValidation = async (req, res, next) => {
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

module.exports = problemValidation;
