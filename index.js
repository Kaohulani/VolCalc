//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/coneHeight", function(req, res) {
  res.sendFile(__dirname + "/coneHeight.html");
});


app.post("/computeHeight", function(req, res) {
  
  const V = Number(req.body.volume);
  const r = Number(req.body.radius);

  // Calculate the height of the cone using the formula
  const h = (3 * V) / (Math.PI * Math.pow(r, 2));


  res.send("The height of the cone is " + h.toFixed(2));
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
