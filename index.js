const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

var lastData = null;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

function sendLastData() {
  io.sockets.emit(lastData);
}

app.post('/', function (req, res) {
  lastData = req.body;
  sendLastData();
  res.sendStatus(200);
});

io.on('connection', (socket) => {
  sendLastData();
});

http.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));