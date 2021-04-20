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

// TODO add trigger table and corresponding get statements
// TODO add lateFine table statements (should this be made into a trigger in the db? it should auto-create when a due date passes right?)
// TODO add more filter capabilities to searches
// TODO create checks to ensure if a foreign key ref doesn't exist - they user is informed

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
(id, title, isbn, author_id, narrator_id, publisher, publication_year, edition, series, series_position, genre, waitlist_capacity, location) 
VALUES (SELECT id FROM item WHERE id = ${req.body.id},
${req.body.title}, ${req.body.isbn}, 
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
// Display audiobooks filtered by query
// TODO add more filter capabilities
app.get('api/audiobook/search', (req, res) => {
    pool.query(`SELECT ${audiobook}.isbn, ${audiobook}.title, 
    ${author}.f_name, ${author}.l_name,
    ${narrator}.f_name, ${narrator}.l_name, 
    ${audiobook}.edition, ${audiobook}.genre,
    ${audiobook}.genre, ${audiobook}.checked_out, ${audiobook}.location
    FROM ${audiobook} 
    INNER JOIN ${author} ON ${audiobook}.author_id = ${author}.id
    INNER JOIN ${narrator} ON ${audiobook}.narrator = ${narrator}.id
    INNER JOIN ${item} ON ${audiobook}.id = ${item}.id
    WHERE ${audiobook}.title = ${req.body.title} AND ${author}.l_name = ${req.body.l_name_auth} AND ${item}.active = true`)
})

// BOOK statements
// Create a book

app.post('/api/book', (req, res) => {
    pool.query(`INSERT INTO ${book} 
(id, title, isbn, author_id, publisher, publication_year, edition, series, series_position, genre, ebook, waitlist_capacity, location) 
VALUES (SELECT id FROM item WHERE id = ${req.body.id},
${req.body.title}, ${req.body.isbn}, 
SELECT id FROM author WHERE f_name = ${req.body.f_name_auth} AND l_name = ${req.body.l_name_auth},
SELECT id FROM publisher WHERE publisher_name = ${req.body.publisher_name},
${req.body.publication_year}, ${req.body.edition},
SELECT id FROM series WHERE series_name = ${req.body.series_name}, ${req.body.series_position}, ${req.body.genre}, ${req.body.waitlist_capacity},
SELECT id FROM location WHERE location_name = ${req.body.location_name})`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "Book insert failed"})
        }
        else {
            res.send(rows)
        }
    })
})

// Display all books
app.get('/api/book', (req,res) => {
    pool.query(`SELECT * FROM ${book}`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve books"});
        } else {
            res.send(rows);
        }
    })
})
// Display books filtered by query
// TODO add more filter capabilities
app.get('api/book/search', (req, res) => {
    pool.query(`SELECT ${book}.isbn, ${book}.title, 
    ${author}.f_name, ${author}.l_name,
    ${publisher}.f_name, ${publisher}.l_name, 
    ${book}.edition, ${book}.genre,
    ${book}.genre, ${book}.checked_out, ${book}.location
    FROM ${book} 
    INNER JOIN ${author} ON ${book}.author_id = ${author}.id
    INNER JOIN ${publisher} ON ${book}.publisher = ${publisher}.id
    INNER JOIN ${item} ON ${book}.id = ${item}.id
    WHERE ${book}.title = ${req.body.title} AND ${author}.l_name = ${req.body.l_name_auth} AND ${item}.active = true`)
})




// device statements
// Create an device
app.post('/api/device', (req, res) => {
    pool.query(`INSERT INTO ${device} 
(id, device_type, model, waitlist_capacity, location) 
VALUES (SELECT id FROM item WHERE id = ${req.body.id},
${req.body.device_type}, ${req.body.model},${req.body.waitlist_capacity},
SELECT id FROM location WHERE location_name = ${req.body.location_name})`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "device insert failed"})
        }
        else {
            res.send(rows)
        }
    })
})
// Display all device
app.get('/api/device', (req,res) => {
    pool.query(`SELECT * FROM ${device}`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve devices"});
        } else {
            res.send(rows);
        }
    })
})
// Display audiobooks filtered by query
// TODO add more filter capabilities
app.get('api/device/search', (req, res) => {
    pool.query(`SELECT ${device}.device_type, ${device}.model, 
    ${device}.checked_out, ${device}.location
    FROM ${device} 
    INNER JOIN ${item} ON ${device}.id = ${item}.id
    WHERE ${device}.device_type = ${req.body.device_type} AND ${device}.model  = ${req.body.model}$ AND ${item}.active = true`)
})
// DVD statements
// Create a dvd
app.post('/api/dvd', (req, res) => {
    pool.query(`INSERT INTO ${dvd} 
(id, title, release_date, director, studio, waitlist_capacity, location) 
VALUES (SELECT id FROM item WHERE id = ${req.body.id},
${req.body.title}, ${req.body.director}, ${req.body.studio}, ${req.body.waitlist_capacity},
SELECT id FROM location WHERE location_name = ${req.body.location_name})`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "dvd insert failed"})
        }
        else {
            res.send(rows)
        }
    })
})
// Display all dvds
app.get('/api/dvd', (req,res) => {
    pool.query(`SELECT * FROM ${dvd}`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve dvds"});
        } else {
            res.send(rows);
        }
    })
})
// Display dvds filtered by query
app.get('api/dvd/search', (req, res) => {
    pool.query(`SELECT ${dvd}.title, ${dvd}.release_date, ${dvd}.director, ${dvd}.studio, ${dvd}.checked_out, ${dvd}.location
    FROM ${dvd} 
    INNER JOIN ${item} ON ${dvd}.id = ${item}.id
    WHERE ${dvd}.title = ${req.body.title} AND ${item}.active = true`)
})

// MAGAZINE statements
// Create a magazine
app.post('/api/maazine', (req, res) => {
    pool.query(`INSERT INTO ${magazine} 
(id, title, issue, issue_date, topic, waitlist_capacity, location) 
VALUES (SELECT id FROM item WHERE id = ${req.body.id},
${req.body.title}, ${req.body.issue}, ${req.body.issue_date}, ${req.body.topic}, ${req.body.waitlist_capacity},
SELECT id FROM location WHERE location_name = ${req.body.location_name})`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "magazine insert failed"})
        }
        else {
            res.send(rows)
        }
    })
})
// Display all magazines
app.get('/api/magazine', (req,res) => {
    pool.query(`SELECT * FROM ${magazine}`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve magazines"});
        } else {
            res.send(rows);
        }
    })
})
// Display magazines filtered by query
app.get('api/magazine/search', (req, res) => {
    pool.query(`SELECT ${magazine}.title, ${magazine}.issue, ${magazine}.issue_date, ${magazine}.topic, ${magazine}.checked_out, ${magazine}.location
    FROM ${magazine} 
    INNER JOIN ${item} ON ${magazine}.id = ${item}.id
    WHERE ${magazine}.title = ${req.body.title} AND ${item}.active = true`)
})

/*
                        ========================================
                                    USER QUERIES
                        ========================================
 */
// EMPLOYEE statements
// Create an employee

// Display all employees

// Display one employee filtered by query

// Change employee active status


// CUSTOMER statements
// Create a customer

// Display all customers

// Display one customer filtered by query

// Change customer active status


/*
                        ========================================
                                  NON-USER PERSON QUERIES
                        ========================================
 */
// AUTHOR statements
// Create an author

// Display all narrators

// NARRATOR statements
// Create a narrator

// Display all narrators

/*
                        ========================================
                                NON-ITEM OBJECT QUERIES
                        ========================================
 */
// PUBLISHER statements
// Create a publisher

// Display all publishers

// SERIES statements
// Create a series

// Display all series

// LOCATION statements
// Create a location

// Display all locations

/*
                        ========================================
                                      ACTION QUERIES
                        ========================================
 */
// REQUEST ITEM statements
// Create an item request

// Display all item requests

// Display item requests for a certain user

// Display full waitlist for a certain item


// CHECKOUT statements
// Create an item checkout

// Display all item checkouts

// Display item checkouts for a certain user
