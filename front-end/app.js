var express = require("express"),
  path = require("path"),
  app = express();

app.set("port", 3001);
const HOST = "0.0.0.0";

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//specifying the listening port
var server = app.listen(app.get("port"), HOST, function() {
  console.log(
    "The front end server is running on http://localhost:" + app.get("port")
  );
});
