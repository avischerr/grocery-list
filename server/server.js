const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));

let storage = { banana: 1, apple: 1, tomato: 1 };

app.post("/", (req, res) => {
  // grab req data and add to storage object, POST req
  // send back storage object
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
