const express = require('express');
const mysql = require('mysql');
const dbConfig = require("./config/db.config.js");
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;

const pool = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

pool.connect(function (err) {
    if (err) return console.log("error connecting to db :(")
    else return console.log("db connection working")
})

app.listen(port, () => {
    console.log(`App server now listening to port ${port}`);
});

// TODO add more filter capabilities to searches
// TODO create checks to ensure if a foreign key ref doesn't exist - they user is informed
// TODO check if table is empty before insert => assign id = 1 if the table is empty

/*
                        ========================================
                                   USER AUTH OR MODIFY
                        ========================================
*/
let employeeAuth = (employee) => {
    pool.query(`SELECT 1 FROM employee WHERE id = ? AND password = ?`, [employee.id, employee.pwd], (err, user) => {
        if (err || user.length < 1) throw err
        else if (user.length < 1) employee.id = null
    })
}
let customerAuth = (customer) => {
    pool.query(`SELECT 1 FROM customer WHERE id = ? AND password = ?`, [customer.id, customer.pwd], (err, user) => {
        if (err || user.length < 1) throw err
        else if (user.length < 1) customer.id = null
    })
}

/*
                        ========================================
                                      ITEM QUERIES
                        ========================================
*/
// ITEM statements
// Create a new item (id will be used for a specific type of item after it is created
let getNewItemId = (id) => {
    pool.query(`INSERT INTO item (active) VALUE (true)`, (err, row) => {
        if (err) throw err.message
    })
}
let modifyItemStatus = (id) => {
    pool.query(`UPDATE item SET active = NOT active WHERE id = ?`, [id], (err, row) => {
        if (err) throw err
    })
}

// Display all items
app.get('/api/item', (req, res) => {
    pool.query(`SELECT * FROM item`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve items"});
        } else {
            res.send(rows);
        }
    })
})

// Change item's active status
app.put('/api/item/modify', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        pool.query(`UPDATE item SET active = NOT active WHERE id = ?`, [req.body.item_id], (err, row) => {
            if (err) {
                res.status(500).send({message: "Could not make item inactive"});
            } else {
                res.send(row);
            }
        })
    }
})

// AUDIOBOOK statements
// Create an audiobook
app.post('/api/audiobook', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let id = 0;
        getNewItemId(id)
        pool.query('SELECT COUNT(*) AS total FROM item', (err, rows) => {
            if (err) res.send(err.message)
            else {
                let new_audiobook = {
                    id: rows[0].total + 1,
                    title: req.body.title,
                    isbn: req.body.isbn,
                    f_name_auth: req.body.f_name_auth,
                    l_name_auth: req.body.l_name_auth,
                    f_name_narr: req.body.f_name_narr,
                    l_name_narr: req.body.l_name_narr,
                    publisher_name: req.body.publisher_name,
                    publication_year: req.body.publication_year,
                    edition: req.body.edition,
                    series_name: req.body.series_name,
                    series_position: req.body.series_position,
                    genre: req.body.genre,
                    waitlist_capacity: req.body.waitlist_capacity,
                    location_name: req.body.location_name
                }
                pool.query(`INSERT INTO audiobook
(id, title, isbn, author_id, narrator_id, publisher, publication_year, edition, series, series_position, genre, waitlist_capacity, location) 
VALUES (
(SELECT id FROM item WHERE id = ?),
?, ?, 
(SELECT id FROM author WHERE f_name = ? AND l_name = ?),
(SELECT id FROM narrator WHERE f_name = ? AND l_name = ?),
(SELECT id FROM publisher WHERE publisher_name = ?),
?, ?,
(SELECT id FROM series WHERE series_name = ?), 
?, ?, ?, ?,
(SELECT id FROM location WHERE location_name = ?)
)`, [new_audiobook.id, new_audiobook.title, new_audiobook.isbn, new_audiobook.f_name_auth, new_audiobook.l_name_auth,
                    new_audiobook.f_name_narr, new_audiobook.l_name_narr, new_audiobook.publisher_name, new_audiobook.publication_year,
                    new_audiobook.edition, new_audiobook.series_name, new_audiobook.series_position, new_audiobook.genre, new_audiobook.waitlist_capacity,
                    new_audiobook.location_name], (err, rows) => {
                    if (err) {
                        res.status(500).send({message: "audiobook insert failed"})
                    } else {
                        res.send(rows)
                    }
                })
            }
        })
    }
})
// Display all audiobooks
app.get('/api/audiobook', (req, res) => {
    pool.query(`SELECT * FROM audiobook`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve audiobooks"});
        } else {
            res.send(rows);
        }
    })
})
// Display audiobooks filtered by query
app.get('api/audiobook/search', (req, res) => {
    let audiobook_search = {
        title: req.body.title,
        l_name_auth: req.body.l_name_auth
    }
    pool.query(`SELECT audiobook.isbn, audiobook.title, 
    author.f_name, author.l_name,
    narrator.f_name, narrator.l_name, 
    audiobook.edition, series.series_name,
    audiobook.genre, audiobook.checked_out, location.location_name
    FROM audiobook 
    INNER JOIN author ON audiobook.author_id = author.id
    INNER JOIN narrator ON audiobook.narrator = narrator.id
    INNER JOIN series ON audiobook.series= series.id
    INNER JOIN location ON audiobook.location = location.id
    INNER JOIN item ON audiobook.id = item.id
    WHERE audiobook.title = ? AND author.l_name = ? AND item.active = true`, [audiobook_search.title, audiobook_search.l_name_auth])
})

// BOOK statements
// Create a book
app.post('/api/book', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let id = 0;
        getNewItemId(id);
        pool.query('SELECT COUNT(*) AS total FROM item', (err, rows) => {
            if (err) res.send(err.message)
            else {
                let book = {
                    id: rows[0].total + 1,
                    title: req.body.title,
                    isbn: req.body.isbn,
                    f_name_auth: req.body.f_name_auth,
                    l_name_auth: req.body.l_name_auth,
                    publisher_name: req.body.publisher_name,
                    publication_year: req.body.publication_year,
                    edition: req.body.edition,
                    series_name: req.body.series_name,
                    series_position: req.body.series_position,
                    genre: req.body.genre,
                    ebook: req.body.ebook,
                    waitlist_capacity: req.body.waitlist_capacity,
                    location_name: req.body.location_name
                }
                pool.query(`INSERT INTO book 
(id, title, isbn, author_id, publisher, publication_year, edition, series, series_position, genre, ebook, waitlist_capacity, location) 
VALUES (
(SELECT id FROM item WHERE id = ?),
?, ?, 
(SELECT id FROM author WHERE f_name = ? AND l_name = ?),
(SELECT id FROM publisher WHERE publisher_name = ?),
?, ?,
(SELECT id FROM series WHERE series_name = ?), 
?, ?, ?, ?,
(SELECT id FROM location WHERE location_name = ?)
)`, [book.id, book.title, book.isbn, book.f_name_auth, book.l_name_auth,
                    book.publisher_name, book.publication_year, book.edition,
                    book.series_name, book.series_position, book.genre, book.ebook,
                    book.waitlist_capacity, book.location_name], (err, rows) => {
                    if (err) {
                        res.status(500).send({message: "Book insert failed"})
                    } else {
                        res.send(rows)
                    }
                })
            }
        })
    }
})

// Display all books
app.get('/api/book', (req, res) => {
    pool.query(`SELECT * FROM book`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve books"});
        } else {
            res.send(rows);
        }
    })
})
// Display books filtered by query
app.get('api/book/search', (req, res) => {
    let book_search = {
        title: req.body.title,
        l_name_auth: req.body.l_name_auth
    }
    pool.query(`SELECT book.isbn, book.title, 
    author.f_name, author.l_name,
    publisher.publisher_name, 
    book.edition, series.series_name,
    book.genre, book.checked_out, location.location_name
    FROM book 
    INNER JOIN author ON book.author_id = author.id
    INNER JOIN publisher ON book.publisher = publisher.id
    INNER JOIN series ON book.series = series.id
    INNER JOIN location ON book.location = location.id
    INNER JOIN item ON book.id = item.id
    WHERE book.title = ? AND author.l_name = ? AND item.active = true`, [book_search.title, book_search.l_name_auth])
})

// DEVICE statements
// Create a device
app.post('/api/device', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let item_id = 0;
        getNewItemId(item_id);
        pool.query('SELECT COUNT(*) AS total FROM item', (err, rows) => {
            if (err) res.send(err.message)
            else {
                console.log(rows[0].total)
                let device = {
                    id: parseInt(rows[0].total + 1),
                    device_type: req.body.device_type,
                    model: req.body.model,
                    waitlist_capacity: req.body.waitlist_capacity,
                    location_name: req.body.location_name
                }
                pool.query(`INSERT INTO device 
(id, device_type, model, waitlist_capacity, location) 
VALUES (
(SELECT id FROM item WHERE id = ?),
?, ?, ?,
(SELECT id FROM location WHERE location_name = ?)
)`, [device.id, device.device_type, device.model, device.waitlist_capacity, device.location_name], (err, rows) => {
                    if (err) {
                        res.send(err.message)
                        //res.status(500).send({message: "device insert failed"})
                    } else {
                        res.send(rows)
                    }
                })
            }
        })
    }
})
// Display all devices
app.get('/api/device', (req, res) => {
    pool.query(`SELECT * FROM device`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve devices"});
        } else {
            res.send(rows);
        }
    })
})
// Display device filtered by query
app.get('api/device/search', (req, res) => {
    let device_search = {
        device_type: req.body.device_type,
        model: req.body.model
    }
    pool.query(`SELECT device.device_type, device.model, 
    device.checked_out, location.location_name
    FROM device 
    INNER JOIN location ON device.location = location.id
    INNER JOIN item ON device.id = item.id
    WHERE device.device_type = ? AND device.model = ? AND item.active = true`, [device_search.device_type, device_search.model])
})

// DVD statements
// Create a dvd
app.post('/api/dvd', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let id = 0
        getNewItemId(id)
        pool.query('SELECT COUNT(*) AS total FROM item', (err, rows) => {
            if (err) res.send(err.message)
            else {
                let dvd = {
                    id: rows[0].total + 1,
                    title: req.body.title,
                    release_date: req.body.release_date,
                    director: req.body.director,
                    studio: req.body.studio,
                    waitlist_capacity: req.body.waitlist_capacity,
                    location_name: req.body.location_name
                }
                pool.query(`INSERT INTO dvd 
(id, title, release_date, director, studio, waitlist_capacity, location) 
VALUES (
(SELECT id FROM item WHERE id = ?),
?, ?, ?, ?,
(SELECT id FROM location WHERE location_name = ?)
)`, [dvd.id, dvd.title, dvd.release_date, dvd.director, dvd.studio, dvd.waitlist_capacity, dvd.location_name], (err, rows) => {
                    if (err) {
                        res.status(500).send({message: "dvd insert failed"})
                    } else {
                        res.send(rows)
                    }
                })
            }
        })
    }
})
// Display all dvds
app.get('/api/dvd', (req, res) => {
    pool.query(`SELECT * FROM dvd`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve dvds"});
        } else {
            res.send(rows);
        }
    })
})
// Display dvds filtered by query
app.get('api/dvd/search', (req, res) => {
    let dvd_search = {
        title: req.body.title,
    }
    pool.query(`SELECT dvd.title, dvd.release_date, dvd.director, dvd.studio, dvd.checked_out, location.location_name
    FROM dvd 
    INNER JOIN location ON dvd.location = location.id
    INNER JOIN item ON dvd.id = item.id
    WHERE dvd.title = ? AND item.active = true`, [dvd_search.title])
})

// MAGAZINE statements
// Create a magazine
app.post('/api/magazine', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let id = 0
        getNewItemId(id)
        pool.query('SELECT COUNT(*) AS total FROM item', (err, rows) => {
            if (err) res.send(err.message)
            else {
                let magazine = {
                    id: rows[0].total + 1,
                    title: req.body.title,
                    issue: req.body.issue,
                    issue_date: req.body.issue_date,
                    topic: req.body.topic,
                    waitlist_capacity: req.body.waitlist_capacity,
                    location_name: req.body.location_name
                }
                pool.query(`INSERT INTO magazine 
(id, title, issue, issue_date, topic, waitlist_capacity, location) 
VALUES (
(SELECT id FROM item WHERE id = ?),
?, ?, ?, ?, ?,
(SELECT id FROM location WHERE location_name = ?)
)`, [magazine.id, magazine.title, magazine.issue, magazine.issue_date, magazine.topic,
                    magazine.waitlist_capacity, magazine.location_name], (err, rows) => {
                    if (err) {
                        res.status(500).send({message: "magazine insert failed"})
                    } else {
                        res.send(rows)
                    }
                })
            }
        })
    }
})
// Display all magazines
app.get('/api/magazine', (req, res) => {
    pool.query(`SELECT * FROM magazine`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve magazines"});
        } else {
            res.send(rows);
        }
    })
})
// Display magazines filtered by query
app.get('api/magazine/search', (req, res) => {
    let magazine_search = {
        title: req.body.title
    }
    pool.query(`SELECT magazine.title, magazine.issue, magazine.issue_date, magazine.topic, magazine.checked_out, magazine.location
    FROM magazine 
    INNER JOIN item ON magazine.id = item.id
    WHERE magazine.title = ? AND item.active = true`, [magazine_search.title])
})

/*
                        ========================================
                                    USER QUERIES
                        ========================================
*/
// EMPLOYEE statements
// Create an employee
app.post('/api/employee', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let employee = {
            pwd: req.body.pwd,
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            ssn: req.body.ssn,
            birthdate: req.body.birthdate,
            salary: req.body.salary,
            job_title: req.body.job_title,
            phone_no: req.body.phone_no
        }
        pool.query(`INSERT INTO employee 
(password, f_name, l_name, ssn, birthdate, salary, job_title, phone_no) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [employee.pwd, employee.f_name, employee.l_name, employee.ssn, employee.birthdate, employee.salary, employee.job_title, employee.phone_no],
            (err, rows) => {
                if (err) {
                    res.status(500).send({message: "employee insert failed"})
                } else {
                    res.send(rows)
                }
            })
    }
})
// Display all employees
app.get('/api/employee', (req, res) => {
    pool.query(`SELECT * FROM employee`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve employees"});
        } else {
            res.send(rows);
        }
    })
})
// Display one employee filtered by query
app.get('api/employee/search', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let employee_search = {
            ssn: req.body.ssn,
            id: req.body.id,
            f_name: req.body.f_name,
            l_name: req.body.l_name
        }
        pool.query(`SELECT employee.f_name, employee.l_name, 
    employee.ssn, employee.birthdate,
    employee.salary, employee.job_title, 
    employee.phone_no, employee.id
    FROM employee 
    WHERE (employee.ssn = ?) OR (employee.id = ?) OR 
    (employee.f_name = ? AND employee.l_name = ?) 
    AND employee.active = true`, [employee_search.ssn, employee_search.id, employee_search.f_name, employee_search.l_name])
    }
})
// Change employee's active status
app.put('/api/employee/modify', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let employee_change = {
            id: req.body.id,
        }
        pool.query(`UPDATE employee SET active = NOT active WHERE id = ?` [employee_change.id], (err, row) => {
            if (err) {
                res.status(500).send({message: "Could not make employee inactive"});
            } else {
                res.send(row);
            }
        })
    }
})

// CUSTOMER statements
// Create a customer
app.post('/api/customer', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        const new_customer = {
            pwd: req.body.pwd,
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            customer_role: req.body.customer_role,
            item_limit: req.body.item_limit,
            acct_balance: req.body.acct_balance,
            fine_rate: req.body.fine_rate
        }
        pool.query('INSERT INTO customer (password, f_name, l_name, customer_role, item_limit, acct_balance, fine_rate) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [new_customer.pwd, new_customer.f_name, new_customer.l_name, new_customer.customer_role, new_customer.item_limit, new_customer.acct_balance, new_customer.fine_rate],
            (err, rows) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.send(rows)
                }
            })
    }
})
// Display all customers
app.get('/api/customer', (req, res) => {
    pool.query(`SELECT * FROM customer`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve customer"});
        } else {
            res.send(rows);
        }
    })
})
// Display one customer filtered by query
app.get('api/customer/search', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let customer_search = {
            id: req.body.id,
            f_name: req.body.f_name,
            l_name: req.body.l_name
        }
        pool.query(`SELECT customer.f_name, customer.l_name, 
    customer.customer_role, customer.item_limit,
    customer.acct_balance, customer.fine_rate, 
    customer.id)
    FROM customer 
    WHERE (customer.id = ? OR (customer.f_name = ? AND customer.l_name = ?)) AND customer.active = true`,
            [customer_search.id, customer_search.f_name, customer_search.l_name])
    }
})
// Change customer's active status
app.put('/api/customer/modify', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let customer_change = {
            id: req.body.id
        }
        pool.query(`UPDATE customer SET active = NOT active WHERE id = ?`, [customer_change.id], (err, row) => {
            if (err) {
                res.status(500).send({message: "Could not make item inactive"});
            } else {
                res.send(row);
            }
        })
    }
})


/*
                        ========================================
                                  NON-USER PERSON QUERIES
                        ========================================
 */
// AUTHOR statements
// Create an author
app.post('/api/author', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let author = {
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            origin: req.body.origin,
            author_born: req.body.author_born,
            author_died: req.body.author_died
        }
        pool.query(`INSERT INTO author 
(f_name, l_name, origin, author_born, author_died) 
VALUES (?, ?, ?, ?, ?`, [author.f_name, author.l_name, author.origin, author.author_born, author.author_died], (err, rows) => {
            if (err) {
                res.status(500).send({message: "author insert failed"})
            } else {
                res.send(rows)
            }
        })
    }
})
// Display all authors
app.get('/api/author', (req, res) => {
    pool.query(`SELECT * FROM author`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve authors"});
        } else {
            res.send(rows);
        }
    })
})
// NARRATOR statements
// Create a narrator
app.post('/api/narrator', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let narrator = {
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            origin: req.body.origin,
            narrator_born: req.body.narrator_born,
            narrator_died: req.body.narrator_died
        }
        pool.query(`INSERT INTO narrator 
(f_name, l_name, origin, narrator_born, narrator_died) 
VALUES (?, ?, ?, ?, ?`, [narrator.f_name, narrator.l_name, narrator.origin, narrator.narrator_born, narrator.narrator_died], (err, rows) => {
            if (err) {
                res.status(500).send({message: "narrator insert failed"})
            } else {
                res.send(rows)
            }
        })
    }
})
// Display all narrators
app.get('/api/narrator', (req, res) => {
    pool.query(`SELECT * FROM narrator`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve narrators"});
        } else {
            res.send(rows);
        }
    })
})
/*
                        ========================================
                                NON-ITEM OBJECT QUERIES
                        ========================================
 */
// PUBLISHER statements
// Create a publisher
app.post('/api/publisher', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let publisher = {
            publisher_name: req.body.publisher_name,
            headquarters: req.body.headquarters
        }
        pool.query(`INSERT INTO publisher 
(publisher_name, headquarters) 
VALUES (?, ?`, [publisher.publisher_name, publisher.headquarters], (err, rows) => {
            if (err) {
                res.status(500).send({message: "publisher insert failed"})
            } else {
                res.send(rows)
            }
        })
    }
})
// Display all publishers
app.get('/api/publisher', (req, res) => {
    pool.query(`SELECT * FROM publisher`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve publishers"});
        } else {
            res.send(rows);
        }
    })
})

// SERIES statements
// Create a series
// TODO what is series_number? maybe not a necessary attribute?
app.post('/api/series', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let series = {
            series_name: req.body.series_name,
            total_series: req.body.total_series,
            series_number: req.body.series_number
        }
        pool.query(`INSERT INTO series 
(series_name, total_series, series_number) 
VALUES (?, ?, ?`, [series.series_name, series.total_series, series.series_number], (err, rows) => {
            if (err) {
                res.status(500).send({message: "series insert failed"})
            } else {
                res.send(rows)
            }
        })
    }
})
// Display all series
app.get('/api/series', (req, res) => {
    pool.query(`SELECT * FROM series`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve series"});
        } else {
            res.send(rows);
        }
    })
})

// LOCATION statements
// Create a location
app.post('/api/location', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let location = {
            location_name: req.body.location_name,
            address: req.body.address,
            phone_no: req.body.phone_no
        }
        pool.query(`INSERT INTO location 
(location_name, address, phone_no) 
VALUES (?, ?, ?`, [location.location_name, location.address, location.phone_no], (err, rows) => {
            if (err) {
                res.status(500).send({message: "location insert failed"})
            } else {
                res.send(rows)
            }
        })
    }
})
// Display all locations
app.get('/api/location', (req, res) => {
    pool.query(`SELECT * FROM location`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve locations"});
        } else {
            res.send(rows);
        }
    })
})

/*
                        ========================================
                                      ACTION QUERIES
                        ========================================
 */
// REQUEST ITEM statements
// Create an item request
app.post('/api/itemRequest', (req, res) => {
    const cust = {id: req.body.requester_id, pwd: req.body.customer_pwd}
    customerAuth(cust);
    if (cust.id === null) res.status(400).send({message: "Customer credentials incorrect"})
    else {
        let item_request = {
            id: req.body.id,
            req_number: req.body.req_number,
            requester_id: cust.id
        }
        pool.query(`INSERT INTO itemRequest 
(req_number, item_id, requester_id) 
VALUES (
(SELECT id FROM item WHERE id = ?), ?, (SELECT id FROM customer WHERE id = ?))`, [item_request.id, item_request.req_number, item_request.requester_id], (err, rows) => {
            if (err) {
                res.status(500).send({message: "item request failed"})
            } else {
                res.send(rows)
            }
        })
    }
})
// Display all item requests
app.get('/api/itemRequest', (req, res) => {
    pool.query(`SELECT * FROM itemRequest`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve item requests"});
        } else {
            res.send(rows);
        }
    })
})
// Display item requests for a certain user
app.get('api/itemRequest/search', (req, res) => {
    const cust = {id: req.body.requester_id, pwd: req.body.customer_pwd}
    customerAuth(cust);
    if (cust.id === null) res.status(400).send({message: "Customer credentials incorrect"})
    else {
        let item_request = {
            req_number: req.body.req_number,
            id: cust.id
        }
        pool.query(`SELECT itemRequest.req_number, itemRequest.item_id, 
    itemRequest.req_date, customer.f_name,
    customer.l_name, customer.id
    FROM itemRequest 
    INNER JOIN customer ON itemRequest.requester_id = customer.id
    WHERE ((itemRequest.req_number = ?) OR (itemRequest.id = ?)) AND itemRequest.active = true`, [item_request.req_number, item_request.id])
    }
})
// todo Display full waitlist for a certain item


// CHECKOUT statements
// Create an item checkout
app.post('/api/checkoutItem', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let item_checkout = {
            item: req.body.item_id,
            borrower: req.body.borrower_id,
            employee: emp.id
        }
        pool.query(`INSERT INTO checkoutItem 
(item, borrower_id, employee_id) 
VALUES (?,
(SELECT id FROM customer WHERE id = ?),
(SELECT id FROM employee WHERE id = ?),
)`, [item_checkout.item, item_checkout.borrower, item_checkout.employee], (err, rows) => {
            if (err) {
                res.status(500).send({message: "item checkout failed"})
            } else {
                res.send(rows)
            }
        })
    }
})

// Display all item checkouts
app.get('/api/checkoutItem', (req, res) => {
    pool.query(`SELECT * FROM checkoutItem`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve checkoutItems"});
        } else {
            res.send(rows);
        }
    })
})

// Display item checkouts for a certain user
app.get('api/checkoutItem/search', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let checkout_search = {
            id: req.body.id,
            borrower: req.body.borrower_id
        }
        pool.query(`SELECT checkoutItem.id, checkoutItem.item, 
    checkoutItem.checkout_date, checkoutItem.due_date,
    checkoutItem.returned, customer.id, customer.f_name,
    customer.l_name, employee.id,  employee.f_name, employee.l_name
    FROM checkoutItem 
    INNER JOIN customer ON checkoutItem.borrower_id = customer.id
    INNER JOIN employee ON checkoutItem.employee_id = employee.id
    WHERE (checkoutItem.id = ? OR checkoutItem.borrower_id = ?) AND itemRequest.active = true`, [checkout_search.id, checkout_search.borrower], (err, rows) => {
            if (err) {
                res.status(500).send({message: "display item checkouts for a certain customer failed"})
            } else {
                res.send(rows)
            }
        })
    }
})

// Update checkoutItem when an item is returned
app.put('/api/checkoutItem/modify', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let checkout_update = {
            borrower: req.body.borrower_id,
            item: req.body.item_id
        }
        pool.query(`UPDATE checkoutItem SET (returned = true AND return_date = NOW()) WHERE borrower_id = ? AND item = ?`, [checkout_update.borrower, checkout_update.item], (err, row) => {
            if (err) {
                res.status(500).send({message: "Item return failed"});
            } else {
                res.send(row);
            }
        })
    }
})

// LATE FINE statements
// Display active lateFines
app.get('/api/lateFine', (req, res) => {
    pool.query(`SELECT * FROM lateFine`, (err, rows) => {
        if (err) {
            res.status(500).send({message: "could not retrieve late fines"});
        } else {
            res.send(rows);
        }
    })
})
// Update a lateFine when paid
app.put('/api/lateFine/modify', (req, res) => {
    const emp = {id: req.body.employee_id, pwd: req.body.employee_pwd}
    employeeAuth(emp);
    if (emp.id === null) res.status(400).send({message: "Employee credentials incorrect"})
    else {
        let latefine_update = {
            borrower: req.body.borrower_id,
            item: req.body.item_id
        }
        pool.query(`UPDATE lateFine SET (paid = true AND paid_date = NOW()) WHERE borrower = ? AND checkout_item = ?`, [latefine_update.borrower, latefine_update.item], (err, row) => {
            if (err) {
                res.status(500).send({message: "Late fine payment failed"});
            } else {
                res.send(row);
            }
        })
    }
})