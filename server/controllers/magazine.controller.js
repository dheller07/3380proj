const { Op } = require("sequelize");
const db = require("../models/");
const Magazine = db.magazine;
const Location = db.location

// Create and Save a new Magazine
exports.create = (req, res) => {
    // Validate request
    if(!req.body.device_type) {
        res.status(400).send({massage: "Magazine title must be included!!"})
    }

    // Create new magazine
    // TODO utilize functions from other controllers to get the id for foreign refs
    // TODO use default values where appropriate (ex - checked_out: false)
    const magazine = {
        title: req.body.title,
        issue: req.body.issue,
        issue_date: req.body.issue_date,
        topic: req.body.topic,
        checked_out: false,
        waitlist_capacity: req.body.waitlist_capacity,
        location: req.body.location
    }

    // Save in the database
    Magazine.create(magazine)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new magazine"
            });
        });
};

// Retrieve all Magazines from the database.
exports.findAll = (req, res) => {
    Magazine.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving magazines"
            }));
};

// Find all magazines that fit search parameters
exports.findThese = (req, res) => {
    Magazine.findAll({
        where: [{
            title: req.body.title,
            required: false
        }, {
            issue: req.body.issue,
            required: false
        }, {
            issue_date: req.body.issue_date,
            required: false
        }, {
            topic: req.body.topic,
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
            res.status(500).send({ message: err.message || "An error occurred while retrieving magazines" })
        })
}

// Find a single Magazine with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Magazine.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Magazine with id " + id
            });
        });
};

// Update a Magazine by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Magazine.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Magazine updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update magazine with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating magazine with id " + id
            })
        })
};

// Delete a Magazine with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Magazine.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Magazine deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete magazine with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting magazine with id " + id
            })
        })
};

// Delete all Magazines from the database.
exports.deleteAll = (req, res) => {
    Magazine.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Magazines were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all magazines."
            });
        });
};