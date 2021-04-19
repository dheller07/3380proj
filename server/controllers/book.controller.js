const { Op } = require("sequelize");
const db = require("../models/");
const Book = db.book;
const Author = db.author;
const Location = db.location;
const Publisher = db.publisher;
const Series = db.series;

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({message: "Book title must be included!!"})
    }

    // Create new book
    const author = Author.findOne({
        where: {
            f_name: req.body.f_name,
            l_name: req.body.l_name
        }
    }).then(a => {
        // if (!a) /* TODO create author? */
    })
    const publisher = Publisher.findOne({
        where: {
            publisher_name: req.body.publisher
        }
    }).then(p => {
        // if (!p) /* TODO create publisher? */
    })
    const series = Series.findOne({
        where: {
            series_name: req.body.series
        }
    }).then(s => {
        // if (!s) /* TODO create series? */
    })
    const location = Location.findOne({
        where: {
            location_name: req.body.location
        }
    }).then(l => {
        // if (!l) /* TODO create location? */
    })

    // TODO use default values where appropriate (ex - checked_out: false)
    const book = {
        title: req.body.title,
        isbn: req.body.isbn,
        author_id: author.id,
        publisher: publisher.id,
        publication_year: req.body.publication_year,
        edition: req.body.edition,
        series: series.id,
        series_position: series.series_number,
        genre: req.body.genre,
        checked_out: false,
        ebook: req.body.ebook,
        waitlist_capacity: req.body.waitlist_capacity,
        location: location.id
    }

    // Save in the database
    Book.create(book)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new book"
            });
        });
};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
    Book.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving books"
            }));
};

// Find a single Book with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Book.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving book with id " + id
            });
        });
};

// Find all books that fit search parameters
// TODO add remaining parameters
exports.findThese = (req, res) => {
    Book.findAll({
        where: [{
            title: req.body.title,
            required: false
        }, {
            isbn: req.body.isbn,
            required: false
        },],
        include: [{
            model: Author,
            where: [{
                f_name: req.body.f_name,
                required: false
            }, {
                l_name: req.body.l_name,
                required: false
            }]
        }, {
            model: Location,
            where: {location_name: req.body.location},
            required: false
        }]
    })
        .then(data => {
            res.send(data);
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "An error occurred while retrieving books" })
        })
}

// Update an Book by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Book.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Book updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update book with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating book with id " + id
            })
        })
};

// Delete an Book with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Book.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Book deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete book with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting book with id " + id
            })
        })
};

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
    Book.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Books were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all books."
            });
        });
};

