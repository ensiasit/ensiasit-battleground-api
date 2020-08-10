const express = require("express");
const router = express.Router();

const judgesDAO = require("../dao/judge");

router.get("/", async (req, res) => {
  try {
    await judgesDAO.getAll((result) => res.json(result));
  } catch (err) {
    if (err.isJoi) {
      res.status(400).send(err.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

router.get("/:username", async (req, res) => {
  try {
    await judgesDAO.getOne(req.params.username, (result) => res.json(result));
  } catch (err) {
    if (err.isJoi) {
      res.status(400).send(err.message);
    } else if (err.isNotFound) {
      res.status(404).send(err.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

router.post("/", async (req, res) => {
  try {
    await judgesDAO.addOne(req.body, (result) => res.json(result));
  } catch (err) {
    if (err.isJoi) {
      res.status(400).send(err.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

router.put("/:username", async (req, res) => {
  try {
    await judgesDAO.updateOne(req.params.username, req.body, (result) =>
      res.json(result)
    );
  } catch (err) {
    if (err.isJoi) {
      res.status(400).send(err.message);
    } else if (err.isNotFound) {
      res.status(404).send(err.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

router.delete("/:username", async (req, res) => {
  try {
    await judgesDAO.deleteOne(req.params.username, (result) =>
      res.json(result)
    );
  } catch (err) {
    if (err.isJoi) {
      res.status(400).send(err.message);
    } else if (err.isNotFound) {
      res.status(404).send(err.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

module.exports = router;
