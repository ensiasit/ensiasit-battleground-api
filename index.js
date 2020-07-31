require('dotenv').config()

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.SERVER_PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}`));

