const express = require("express");
const router = express.Router();
const { custom } = require("../models");
const { fixed } = require("../models");

router.get("/", async (req, res) => {
  try {
    const list = await custom.findAll();

    if (list) {
      return res.status(200).json(list);
    } else {
      return res.status(404).send("not found");
    }
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const { inputCustom } = req.body;
    const fixedList = await fixed.findOne({
      where: {
        name: inputCustom,
      },
    });

    if (fixedList === null) {
      const [result, created] = await custom.findOrCreate({
        where: {
          name: inputCustom,
        },
      });
      if (created) {
        return res.status(201).send("확장자를 생성 했습니다.");
      } else {
        return res.status(400).send("이미 있는 확장자입니다.");
      }
    } else {
      return res.status(400).send("이미 있는 확장자입니다.");
    }
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;
    await custom.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (e) {
    return res.sendStatus(500);
  }
});

module.exports = router;
