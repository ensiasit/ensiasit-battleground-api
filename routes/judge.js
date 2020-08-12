const express = require("express");
const router = express.Router();

const judgesDAO = require("../dao/judge");

router.get("/", async (req, res) => {
  try {
    const judges = await judgesDAO.getAll();
    res.json(judges);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.get("/:username", async (req, res) => {
  try {
    const judge = await judgesDAO.getOne(req.params.username);
    res.json(judge);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.post("/", async (req, res) => {
  try {
    const judge = await judgesDAO.addOne(req.body);
    res.json(judge);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.put("/:username", async (req, res) => {
  try {
    const judge = await judgesDAO.updateOne(req.params.username, req.body);
    res.json(judge);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.delete("/:username", async (req, res) => {
  try {
    const judge = await judgesDAO.deleteOne(req.params.username);
    res.json(judge);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

module.exports = router;
