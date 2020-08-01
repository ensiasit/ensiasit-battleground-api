const express = require("express");
const router = express.Router();

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

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
const db = require("monk")(`${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`);
const resources = db.get("resources");

router.get("/", async (req, res, next) => {
  try {
    const all = await resources.find({});
    res.json(all);
  } catch (err) {
    next(err);
  }
});

router.get("/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const searched = await resources.findOne({ _id });
  if (!searched) {
    throw res.status(404).send(`No document with {_id:"${_id}"} found.`);
  }
  res.json(searched);
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await schemaPOST.validateAsync(req.body);
    const inserted = await resources.insert(resource);
    res.json(inserted);
  } catch (err) {
    next(err);
  }
});

router.put("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const resource = await schemaPUT.validateAsync(req.body);
    const searched = await resources.findOne({ _id });
    if (!searched) {
      throw res.status(404).send(`No document with {_id:"${_id}"} found.`);
    }
    await resources.update({ _id }, { $set: resource });
    res.json(searched);
  } catch (err) {
    next(err);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const searched = await resources.findOne({ _id });
    if (!searched) {
      throw res.status(404).send(`No document with {_id:"${_id}"} found.`);
    }
    await resources.remove({ _id });
    res.json(searched);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
