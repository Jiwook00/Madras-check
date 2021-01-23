require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const { sequelize } = require("./models");

const fixrouter = require("./routes/fixedList");
const custom = require("./routes/custom");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.log("데이터 베이스 연결 실패", err);
  });

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.use("/fixed", fixrouter);
app.use("/custom", custom);

app.listen(port, () => {
  console.log(`connected port: ${port}`);
});
