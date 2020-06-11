const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/hello', function (req, res) {
    console.log(req.body);
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));