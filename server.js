const express = require("express");
const dbConnection = require("./db");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server has started in port ${port}`));
