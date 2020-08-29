const express = require("express");
const router = express.Router();

const contestsDAO = require("../dao/contest");

router.get("/", async (req, res) => {
  try {
    const contests = await contestsDAO.getAll();
    res.json(contests);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const contest = await contestsDAO.getOne(req.params.name);
    res.json(contest);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.post("/", async (req, res) => {
  try {
    const contest = await contestsDAO.addOne(req.body);
    res.json(contest);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.put("/:name", async (req, res) => {
  try {
    const contest = await contestsDAO.updateOne(req.params.name, req.body);
    res.json(contest);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.delete("/:name", async (req, res) => {
  try {
    const contest = await contestsDAO.deleteOne(req.params.name);
    res.json(contest);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

module.exports = router;
