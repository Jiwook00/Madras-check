const express = require("express");
const router = express.Router();
const { fixed } = require("../models");

router.get("/", async (req, res) => {
  try {
    const list = await fixed.findAll();

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
    const { id } = req.body;
    const checkList = await fixed.findOne({
      where: {
        id,
      },
    });
    if (checkList.check === 0) {
      await fixed.update({ check: 1 }, { where: { id } });
    } else {
      await fixed.update({ check: 0 }, { where: { id } });
    }
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
});

module.exports = router;
