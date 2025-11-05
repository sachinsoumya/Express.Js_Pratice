const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world Sachin! Express is running🚀");
});

app.listen(5678, () => {
  console.log("server running on localhost:5678");
});
