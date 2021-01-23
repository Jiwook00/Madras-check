require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.listen(port, () => {
  console.log(`connected port: ${port}`);
});
