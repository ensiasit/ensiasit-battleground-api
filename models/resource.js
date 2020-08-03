const joi = require("joi");

const schemaPOST = joi.object({
  field1: joi.string().min(6).max(12).required(),
  field2: joi.number().integer().positive().required(),
  field3: joi.string().uri(),
});

const schemaPUT = joi.object({
  field1: joi.string().min(6).max(12),
  field2: joi.number().integer().positive(),
  field3: joi.string().uri(),
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
  collection: "resources",
  validatePOST,
  validatePUT,
};
