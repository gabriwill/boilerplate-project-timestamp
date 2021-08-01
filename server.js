// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date?", function (req, res, next) {
  if(req.params.date){
    next();
  }else{
    const currentDate = new Date();
    res.json({unix: Date.now(),utc:currentDate.toUTCString()});
  }
  //res.json({unix: 'hello API',utc:""});
}, function (req, res){
  const date = isNaN(Number(req.params.date)) ? req.params.date : Number(req.params.date);
  const urlDate = new Date(date);
  if(urlDate.toUTCString() != "Invalid Date"){
    res.json({unix: urlDate.getTime(),utc:urlDate.toUTCString()});
  }else{
    res.json({ error : "Invalid Date" });
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
