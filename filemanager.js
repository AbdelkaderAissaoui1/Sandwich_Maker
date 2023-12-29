const express = require('express');
let fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    next();
});

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

const path = require('path');
let filePath = path.join(__dirname, "./data.json");

app.put('/data', (req, res) => {
    let data = require(filePath);
    data.push(req.body);
    fs.writeFile(filePath, JSON.stringify(data), function (err) {
        console.log(err);
    });
});


app.post('/data', (req, res) => {
    let filePath = path.join(__dirname, "./data.json");
    let data = req.body;
    fs.writeFile(filePath, JSON.stringify(data), function (err) {
        console.log(err);
    });
});

app.get('/data', (req, res) => {
    let filePath = path.join(__dirname, "./data.json");
    let data = require(filePath);
    res.send(data);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})