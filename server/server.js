const express = require('express');
const mysql = require('mysql');
const dbConfig = require("./config/db.config.js");

const app = express();
const port = 8000;

// DATABASE TABLES
const audiobook = 'audiobook';
const author = 'author';
const book = 'book';
const checkoutItem = 'checkoutItem';
const customer = 'customer';
const device = 'device';
const dvd = 'dvd';
const employee = 'employee';
const item = 'item';
const itemRequest = 'itemRequest';
const lateFine = 'lateFine';
const location = 'location';
const magazine = 'magazine';
const narrator = 'narrator';
const publisher = 'publisher';
const series = 'series';

const pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

app.listen(port, () => {
    console.log(`App server now listening to port ${port}`);
});

app.get('/api/audiobook', (req, res) => {
    pool.query(`select * from ${audiobook}`, (err, rows) => {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    });
});