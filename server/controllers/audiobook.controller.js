const { Op } = require("sequelize");
const db = require("../models/");
const Audiobook = db.audiobook;
const Author = db.author;
const Location = db.location;
const Narrator = db.narrator;

// Create and Save a new Audiobook
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({massage: "Audiobook title must be included!!"})
    }

    // Create new audiobook
    // TODO utilize functions from other controllers to get the id for foreign refs
    // TODO use default values where appropriate (ex - checked_out: false)
    const audiobook = {
        title: req.body.title,
        isbn: req.body.isbn,
        author_id: req.body.author_id,
        narrator_id: req.body.narrator_id,
        publisher: req.body.publisher,
        publication_year: req.body.publication_year,
        edition: req.body.edition,
        series: req.body.series,
        series_position: req.body.series_position,
        genre: req.body.genre,
        checked_out: false,
        waitlist_capacity: req.body.waitlist_capacity,
        location: req.body.location
    }

    // Save in the database
    Audiobook.create(audiobook)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new audiobook"
            });
        });
};

// Retrieve all Audiobooks from the database.
exports.findAll = (req, res) => {
    Audiobook.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving audiobooks"
            }));
};

// Find all audiobooks that fit search parameters
// TODO add remaining parameters
exports.findThese = (req, res) => {
    Audiobook.findAll({
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
        }, {
            model: Narrator,
            where: [{
                f_name: req.body.f_name,
                required: false
            }, {
                l_name: req.body.l_name,
                required: false
            }]
        }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "An error occurred while retrieving books" })
        })
}

// Find a single Audiobook with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Audiobook.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving audiobook with id " + id
            });
        });
};

// Update an Audiobook by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Audiobook.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Audiobook updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update audiobook with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating audiobook with id " + id
            })
        })
};

// Delete an Audiobook with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Audiobook.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Audiobook deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete audiobook with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting audiobook with id " + id
            })
        })
};

// Delete all Audiobooks from the database.
exports.deleteAll = (req, res) => {
    Audiobook.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Audiobooks were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all audiobooks."
            });
        });
};

