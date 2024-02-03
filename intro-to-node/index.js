const express = require("express");
const bodyParser = require("body-parser");

const App = express();

App.use(bodyParser.urlencoded({ extended: true }));

App.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

App.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The Answer is " + result);
});

App.listen(3000, function () {
  console.log("The Server hs started running on port 3000.");
});
