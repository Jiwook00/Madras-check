const express = require("express");
const router = express.Router();
const { custom } = require("../models");

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

router.post("/", (req, res) => {
  try {
    const { inputCustom } = req.body;
    custom
      .findOrCreate({
        where: {
          name: inputCustom,
        },
      })
      .then(([result, created]) => {
        if (created) {
          res.status(201).send("생성");
        } else {
          res.status(400).send("이미 있는");
        }
      });
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.delete("/", (req, res) => {
  try {
    const { id } = req.body;
    custom
      .destroy({
        where: {
          id,
        },
      })
      .then(() => res.sendStatus(201));
  } catch (e) {
    return res.sendStatus(500);
  }
});

module.exports = router;
