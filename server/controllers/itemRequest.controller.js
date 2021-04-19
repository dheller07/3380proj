const { Op } = require("sequelize");
const db = require("../models/");
const ItemReq = db.itemRequest;
const Customer = db.customer;
const Item = db.item;

// Create and Save a new Item Request
exports.create = (req, res) => {
    const customer = Customer.findOne({
        where: {id: req.body.requester_id}
    })
    const item = Item.findOne({
        where: {id: req.body.item_id}
    })
    const item_req = {
        item_id: item.id,
        req_date: req.body.req_date,
        requester_id: customer.id
    }

    // Save in the database
    ItemReq.create(item_req)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new item request"
            });
        });
}

// Retrieve all Item Requests from the database.
exports.findAll = (req, res) => {
    ItemReq.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving item requests"
            }));
};

// Find a single Item Request with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ItemReq.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving item request with id " + id
            });
        });
};

// Update an Item Request by the id
exports.update = (req, res) => {
    const id = req.params.id;

    ItemReq.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Item request updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update item request with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating item request with id " + id
            })
        })
};