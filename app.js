// app.js
// Django settings.py 역할

const express = require("express");
const app = express();

const db = require("./db");

const http = require('http').createServer(app);
const port = 8000;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const Vroutes = require("./routes/View_index");
const Aroutes = require("./routes/Api_index");

// views 경로 정적으로 만듬
app.use(express.static(__dirname + "/views"));

app.use(Vroutes);
app.use(Aroutes);


http.listen(port, () => {
    console.log(`localhost:${port} 실행...`)
});