const joi = require("joi");

const schemaPOST = joi.object({
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

const schemaPUT = joi.object({
  name: joi.string().min(4).max(16),
  username: joi
    .string()
    .min(4)
    .max(16)
    .regex(/[a-z0-9\\-]*/),
  password: joi.string().min(8).max(16),
  email: joi.string().email(),
});

const validatePOST = async (record) => {
  try {
    const validRecord = await schemaPOST.validateAsync(record);
    return validRecord;
  } catch (err) {
    throw err;
  }
};

const validatePUT = async (record) => {
  try {
    const validRecord = await schemaPUT.validateAsync(record);
    return validRecord;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  collection: "judges",
  validatePOST,
  validatePUT,
};
