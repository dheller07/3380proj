const { Op } = require("sequelize");
const db = require("../models/");
const Publisher = db.publisher;

// Create and Save a new Publisher
exports.create = (req, res) => {
    // Validate request
    if(!req.body.publisher_name) {
        res.status(400).send({massage: "Publisher name must be included!!"})
    }

    // Create new publisher record
    const publisher = {
        publisher_name: req.body.publisher_name,
        headquarters: req.body.headquarters
    }

    // Save in the database
    Publisher.create(publisher)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new publisher record"
            });
        });
};

// Retrieve all Publishers from the database.
exports.findAll = (req, res) => {
    Publisher.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving publishers"
            }));
};

// Find a single Publisher with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Publisher.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving publisher with id " + id
            });
        });
};

// Update a Publisher by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Publisher.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Publisher updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update publisher with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating publisher with id " + id
            })
        })
};

// Delete a Publisher with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Publisher.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Publisher deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete publisher with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting publisher with id " + id
            })
        })
};

// Delete all Publishers from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Publisher.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Publishers were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all publishers."
                });
            });
    };
};
