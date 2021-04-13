const { Op } = require("sequelize");
const db = require("../models/");
const Device = db.device;

// Create and Save a new Device
exports.create = (req, res) => {
    // Validate request
    if(!req.body.device_type) {
        res.status(400).send({massage: "Device type must be included!!"})
    }

    // Create new device
    // TODO utilize functions from other controllers to get the id for foreign refs
    // TODO use default values where appropriate (ex - checked_out: false)
    const device = {
        device_type: req.body.device_type,
        model: req.body.model,
        checked_out: false,
        waitlist_capacity: req.body.waitlist_capacity,
        location: req.body.location
    }

    // Save in the database
    Device.create(device)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new device"
            });
        });
};

// Retrieve all Devices from the database.
exports.findAll = (req, res) => {
    Device.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving devices"
            }));
};

// Find a single Device with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Device.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Device with id " + id
            });
        });
};

// Update a Device by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Device.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Device updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update device with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating device with id " + id
            })
        })
};

// Delete a Device with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Device.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Device deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete device with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting device with id " + id
            })
        })
};

// Delete all Devices from the database.
exports.deleteAll = (req, res) => {
    Device.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Devices were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all devices."
            });
        });
};