const { Op } = require("sequelize");
const db = require("../models/");
const Book = db.book;
const Author = db.author;
const Location = db.location;

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({massage: "Book title must be included!!"})
    }

    // Create new book
    // TODO utilize functions from other controllers to get the id for foreign refs
    // TODO use default values where appropriate (ex - checked_out: false)
    const book = {
        title: req.body.title,
        isbn: req.body.isbn,
        author_id: req.body.author_id,
        publisher: req.body.publisher,
        publication_year: req.body.publication_year,
        edition: req.body.edition,
        series: req.body.series,
        series_position: req.body.series_position,
        genre: req.body.genre,
        checked_out: false,
        ebook: req.body.ebook,
        waitlist_capacity: req.body.waitlist_capacity,
        location: req.body.location
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

