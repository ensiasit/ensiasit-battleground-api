const express = require("express");
const router = express.Router();

const problemsDAO = require("../dao/problem");

router.get("/", async (req, res) => {
  try {
    const problems = await problemsDAO.getAll();
    res.json(problems);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const problem = await problemsDAO.getOne(req.params.slug);
    res.json(problem);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.post("/", async (req, res) => {
  try {
    const problem = await problemsDAO.addOne(req.body);
    res.json(problem);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.put("/:slug", async (req, res) => {
  try {
    const problem = await problemsDAO.updateOne(req.params.slug, req.body);
    res.json(problem);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

router.delete("/:slug", async (req, res) => {
  try {
    const problem = await problemsDAO.deleteOne(req.params.slug);
    res.json(problem);
  } catch ({ status, message }) {
    res.status(status || 500).send(message);
  }
});

module.exports = router;
