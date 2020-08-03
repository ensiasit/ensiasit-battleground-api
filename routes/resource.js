const express = require("express");
const router = express.Router();

const resourcesDAO = require("../dao/resource");

router.get("/", async (req, res, next) => {
  try {
    await resourcesDAO.getAll((result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

router.get("/:_id", async (req, res, next) => {
  try {
    await resourcesDAO.getOne(req.params._id, (result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await resourcesDAO.addOne(req.body, (result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

router.put("/:_id", async (req, res, next) => {
  try {
    await resourcesDAO.updateOne(req.params._id, req.body, (result) =>
      res.json(result)
    );
  } catch (err) {
    next(err);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    await resourcesDAO.deleteOne(req.params._id, (result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
