"use strict";

const express = require("express");
const runTests = require("./public/js/tests/run.js");
const app = express();

app.use(express.static("./public"))

app.get("/", (req, res) => {
  res.sendFile(path.join("./index.html"));
});

app.get("/test", (req,res) => {
  res.json({"runTests":runTests()});
});

const PORT = process.env.NODE_PORT;
const HOST = "0.0.0.0";
app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);