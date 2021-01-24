const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const { sequelize } = require("./models");

const fixRouter = require("./routes/fixedList");
const customRouter = require("./routes/custom");

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

app.use("/fixed", fixRouter);
app.use("/custom", customRouter);

app.listen(port, () => {
  console.log(`connected port: ${port}`);
});
