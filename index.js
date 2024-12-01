import 'dotenv/config'
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Please login at chai aur code home</h1>");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
