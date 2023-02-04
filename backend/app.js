const express = require("express");
const app = express();
// sale Routes
const sale = require("./routes/route");

app.use(express.json());
// routes
app.use("/api/v1/", sale);

module.exports = app;
