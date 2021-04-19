const { Op } = require("sequelize");
const db = require("../models/");
const DVD = db.dvd;
const Location = db.location;

// Create and Save a new DVD
exports.create = (req, res) => {
    // Validate request
    if(!req.body.device_type) {
        res.status(400).send({message: "DVD title must be included!!"})
    }

    // Create new dvd
    // TODO utilize functions from other controllers to get the id for foreign refs
    // TODO use default values where appropriate (ex - checked_out: false)
    const dvd = {
        title: req.body.title,
        release_date: req.body.release_date,
        director: req.body.director,
        studio: req.body.studio,
        checked_out: false,
        waitlist_capacity: req.body.waitlist_capacity,
        location: req.body.location
    }

    // Save in the database
    DVD.create(dvd)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new dvd"
            });
        });
};

// Retrieve all DVDs from the database.
exports.findAll = (req, res) => {
    DVD.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving dvds"
            }));
};

// Find all dvds that fit search parameters
exports.findThese = (req, res) => {
    DVD.findAll({
        where: [{
            title: req.body.title,
            required: false
        }, {
            release_date: req.body.release_date,
            required: false
        }, {
            director: req.body.director,
            required: false
        }, {
            studio: req.body.studio,
            required: false
        },],
        include: [{
            model: Location,
            where: {location_name: req.body.location},
            required: false
        }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "An error occurred while retrieving dvds" })
        })
}

// Find a single DVD with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    DVD.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving DVD with id " + id
            });
        });
};

// Update a DVD by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    DVD.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "DVD updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update dvd with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating dvd with id " + id
            })
        })
};

// Delete a DVD with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    DVD.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "DVD deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete dvd with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting dvd with id " + id
            })
        })
};

// Delete all DVDs from the database.
exports.deleteAll = (req, res) => {
    DVD.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} DVDs were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all dvds."
            });
        });
};