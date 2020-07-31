require('dotenv').config()

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Version 0.1.0"));

const port = process.env.SERVER_PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}`));

