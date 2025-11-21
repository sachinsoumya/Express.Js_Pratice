const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  const data = req.body;

  console.log(data);

  res.send(data);
});

router.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);

  console.log(res);

  res.send(data);
});

module.exports = router;
