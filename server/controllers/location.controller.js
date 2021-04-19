const { Op } = require("sequelize");
const db = require("../models/");
const Location = db.location;

// Create and Save a new Location
exports.create = (req, res) => {
    // Validate request
    if(!req.body.location_name) {
        res.status(400).send({message: "Location name must be included!!"})
    }

    // Create new location record
    const location = {
        location_name: req.body.location_name,
        address: req.body.address,
        phone_no: req.body.phone_no
    }
    // Calculate item limit and fine rate based on role

    // Save in the database
    Location.create(location)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new location record"
            });
        });
};

// Retrieve all Locations from the database.
exports.findAll = (req, res) => {
    Location.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving locations"
            }));
};

// Find a single Location with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Location.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving location with id " + id
            });
        });
};

// Update a Location by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Location.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Location updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update location with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating location with id " + id
            })
        })
};

// Delete a Location with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Location.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Location deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete location with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting location with id " + id
            })
        })
};

// Delete all Locations from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Location.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Locations were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all locations."
                });
            });
    };
};
