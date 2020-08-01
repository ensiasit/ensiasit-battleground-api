const express = require("express");
const router = express.Router();

const joi = require("joi");

const schema = joi.object({
  field1: joi.string().min(6).max(12).required(),
  field2: joi.number().integer().positive().required(),
  field3: joi.string().uri(),
});

/**no
 * Get all resources
 */
router.get("/", (req, res, next) => {
  res.json("GET all");
});

/**
 * Get a single resource by id
 */
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json(`GET one ${id}`);
});

/**
 * Add a new resource
 */
router.post("/", async (req, res, next) => {
  try {
    const resource = await schema.validateAsync(req.body);
    res.json(`POST ${resource}`);
  } catch (err) {
    next(err);
  }
});

/**
 * Update an existing resource
 */
router.put("/:id", async (req, res, next) => {
  try {
    const resource = await schema.validateAsync(req.body);
    res.json(`PUT ${req.params.id} : ${JSON.stringify(resource)}`);
  } catch (err) {
    next(err);
  }
});

/**
 * Delete an existing resource
 */
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json(`DELETE ${id}`);
});

module.exports = router;
