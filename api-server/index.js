const express = require("express");
const app = express();
const port = 8081;
const fs = require("fs");
let { products, cart, users } = require("./mockData");

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/cart", (req, res) => {
  res.send(cart);
});
app.post("/api/cart", (req, res) => {
  cart = req.body;

  console.log("this is cart", cart);

  // try {
  //   fs.writeFileSync(
  //     "./mockData.js",
  //     `module.exports = ${JSON.stringify(
  //       { ...require("./mockData.js"), cart },
  //       null,
  //       2
  //     )};`
  //   );

  //   console.log("mockData.js updated successfully");
  // } catch (error) {
  //   console.error("Error writing to mockData.js:", error);
  // }

  res.send(cart);
});

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
