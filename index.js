/**
 * Imports
 */
require("dotenv").config({ path: process.env.ENV_FILE_PATH || ".dev.env" });

const express = require("express");
const app = express();
const morgan = require("morgan");

const judgeValidation = require("./middlewares/judge");
const problemValidation = require("./middlewares/problem");

const judges = require("./routes/judge");
const problems = require("./routes/problem");

/**
 * Middlewares
 */
app.use(express.json());
app.use(morgan("common"));

app.use("/api/judges", judgeValidation);
app.use("/api/problems", problemValidation);

app.use("/api/judges", judges);
app.use("/api/problems", problems);

const port = process.env.SERVER_PORT || 80;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
