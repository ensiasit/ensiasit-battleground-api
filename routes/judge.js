const express = require("express");
const router = express.Router();

const judgesDAO = require("../dao/judge");

router.get("/", async (req, res, next) => {
  try {
    await judgesDAO.getAll((result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

router.get("/:username", async (req, res, next) => {
  try {
    await judgesDAO.getOne(req.params.username, (result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await judgesDAO.addOne(req.body, (result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

router.put("/:username", async (req, res, next) => {
  try {
    await judgesDAO.updateOne(req.params.username, req.body, (result) =>
      res.json(result)
    );
  } catch (err) {
    next(err);
  }
});

router.delete("/:username", async (req, res, next) => {
  try {
    await judgesDAO.deleteOne(req.params.username, (result) =>
      res.json(result)
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
