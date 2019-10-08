const express = require("express");
const app = express();

app.set("port", 4001);
const HOST = "0.0.0.0";

//defining the root endpoint
app.get("/", (req, res) => {
  res.send("Number of visits is: ");
});

//specifying the listening port
var server = app.listen(app.get("port"), HOST, function() {
  console.log(
    "The back end server is running on http://localhost:" + app.get("port")
  );
});
