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

router.get("/:id", async (req, res, next) => {
  try {
    await resourcesDAO.getOne(req.params.id, (result) => res.json(result));
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

router.put("/:id", async (req, res, next) => {
  try {
    await resourcesDAO.updateOne(req.params.id, req.body, (result) =>
      res.json(result)
    );
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await resourcesDAO.deleteOne(req.params.id, (result) => res.json(result));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
