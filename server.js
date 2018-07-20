var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname)));
// app.use("/styles", express.static(__dirname));
// app.use("/images", express.static(__dirname + '/images'));
// app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


//app.listen(process.env.PORT || 8080);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});