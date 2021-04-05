const { Op } = require("sequelize");
const db = require("../models/");
const Series = db.series;

// Create and Save a new Series
exports.create = (req, res) => {
    // Validate request
    if(!req.body.series_name) {
        res.status(400).send({massage: "Series name must be included!!"})
    }
    if(!req.body.total_series) {
        res.status(400).send({massage: "Number of series entries must be included!!"})
    }
    if(!req.body.series_number) {
        res.status(400).send({massage: "Series number must be included!!"})
    }

    // Create new series record
    const series = {
        series_name: req.body.series_name,
        total_series: req.body.total_series,
        series_number: req.body.series_number
    }

    // Save in the database
    Series.create(series)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new series record"
            });
        });
};

// Retrieve all Series from the database.
exports.findAll = (req, res) => {
    Series.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving series"
            }));
};

// Find a single Series with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Series.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving series with id " + id
            });
        });
};

// Update a Series by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Series.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Series updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update series with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating series with id " + id
            })
        })
};

// Delete a Series with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Series.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Series deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete series with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting series with id " + id
            })
        })
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Series.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Series were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all series."
                });
            });
    };
};