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

/*
                        ========================================
                                    ITEM QUERIES
                        ========================================
 */

// ITEM statements
// Create an item
app.post('/api/item', (req, res) => {
    pool.query(`INSERT INTO ${item} (active) VALUE (true)`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "item insert failed"})
        }
        else {
            res.send(rows)
        }
    })
})
// Display all items
app.get('/api/item', (req,res) => {
    pool.query(`SELECT * FROM ${item}`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve items"});
        } else {
            res.send(rows);
        }
    })
})
// Change item's active status
app.put('/api/item/modify', (req,res) => {
    pool.query(`UPDATE ${item} SET active = false WHERE id = ${req.body.item_id}`, (err, row) => {
        if (err) {
            res.status(500).send({message: "Could not make item inactive"});
        } else {
            res.send(row);
        }
    })
})

// AUDIOBOOK statements
// Create an audiobook
app.post('/api/audiobook', (req, res) => {
    pool.query(`INSERT INTO ${audiobook} 
(title, isbn, author_id, narrator_id, publisher, publication_year, edition, series, series_position, genre, waitlist_capacity, location) 
VALUES (${req.body.title}, ${req.body.isbn}, 
SELECT id FROM author WHERE f_name = ${req.body.f_name_auth} AND l_name = ${req.body.l_name_auth},
SELECT id FROM narrator WHERE f_name = ${req.body.f_name_narr} AND l_name = ${req.body.l_name_narr},
SELECT id FROM publisher WHERE publisher_name = ${req.body.publisher_name},
${req.body.publication_year}, ${req.body.edition},
SELECT id FROM series WHERE series_name = ${req.body.series_name}, ${req.body.series_position}, ${req.body.genre}, ${req.body.waitlist_capacity},
SELECT id FROM location WHERE location_name = ${req.body.location_name})`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "audiobook insert failed"})
        }
        else {
            res.send(rows)
        }
    })
})
// Display all audiobooks
app.get('/api/audiobook', (req,res) => {
    pool.query(`SELECT * FROM ${audiobook}`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve audiobooks"});
        } else {
            res.send(rows);
        }
    })
})
// Change active status
