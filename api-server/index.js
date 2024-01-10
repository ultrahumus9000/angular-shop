const express = require("express");
const app = express();
const port = 8081;
const products = require("./mockData");

app.use(express.json());

app.get("/api", (req, res) => {
  console.log("i cannot log");
  res.json(products);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
