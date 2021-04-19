const { Op } = require("sequelize");
const db = require("../models/");
const Author = db.author;

// Create and Save a new Author
exports.create = (req, res) => {
    // Validate request
    if(!req.body.l_name) {
        res.status(400).send({message: "Author last name must be included!!"})
    }

    // Create new author record
    const author = {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        origin: req.body.origin,
        author_born: req.body.author_born,
        author_died: req.body.author_died
    }

    // Save in the database
    Author.create(author)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new author record"
            });
        });
};

// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
    Author.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving authors"
            }));
};

// Find a single Author with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Author.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving author with id " + id
            });
        });
};

// Update an Author by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Author.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Author updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update author with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating author with id " + id
            })
        })
};

// Delete an Author with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Author.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Author deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete author with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting customer with id " + id
            })
        })
};

// Delete all Authors from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Author.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Authors were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all authors."
                });
            });
    };
};

