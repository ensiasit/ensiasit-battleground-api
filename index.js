/**
 * Imports
 */
require("dotenv").config({ path: process.env.ENV_FILE_PATH || ".dev.env" });
const express = require("express");
const app = express();
const morgan = require("morgan");

const judges = require("./routes/judge");

/**
 * Middlewares
 */
app.use(express.json());
app.use(morgan("common"));

app.use("/api/judges", judges);

const port = process.env.SERVER_PORT || 80;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
