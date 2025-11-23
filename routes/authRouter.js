const express = require("express");

const router = express.Router();

router.post("/login", (req, res,next) => {
  const userName = req.query.userName;
  console.log(userName);
  if(!userName){
    const error = new Error("UserName is required");
    error.statusCode=400;
    return next(error);

  }
  const data = req.body;

  console.log(data);

  res.json({
    message:`User ${userName} logged in successfully`,
    data:data
  })
});

router.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);

  console.log(res);

  res.send(data);
});




module.exports = router;
