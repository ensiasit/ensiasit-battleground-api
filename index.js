require("dotenv").config();

const express = require("express");
const app = express();

const resources = require("./routes/resource");

app.use(express.json());

app.use("/api/resources", resources);

const port = process.env.SERVER_PORT || 80;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
