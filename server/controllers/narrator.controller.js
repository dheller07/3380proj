const { Op } = require("sequelize");
const db = require("../models/");
const Narrator = db.narrator;

// Create and Save a new Narrator
exports.create = (req, res) => {
    // Validate request
    if(!req.body.l_name) {
        res.status(400).send({message: "Narrator last name must be included!!"})
    }

    // Create new narrator record
    const narrator = {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        origin: req.body.origin,
        narrator_born: req.body.narrator_born,
        narrator_died: req.body.narrator_died
    }

    // Save in the database
    Narrator.create(narrator)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new narrator record"
            });
        });
};

// Retrieve all narrators from the database.
exports.findAll = (req, res) => {
    Narrator.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving narrators"
            }));
};

// Find a single Narrator with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Narrator.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving narrator with id " + id
            });
        });
};

// Update a Narrator by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Narrator.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Narrator updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update narrator with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating author with id " + id
            })
        })
};

// Delete a Narrator with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Narrator.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Narrator deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete narrator with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting narrator with id " + id
            })
        })
};

// Delete all Narrators from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Narrator.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Narrators were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all narrators."
                });
            });
    };
};

