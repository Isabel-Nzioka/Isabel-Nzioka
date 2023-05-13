const path = require("path");

const express = require("express");

const app = express();

console.log(__dirname);

app.use(express.static(path.join(__dirname, "../utils")));

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/", (req, res) => {
  res.send("About");
});

app.listen(8080, () => {
  console.log("Server is up on port 8080");
});
