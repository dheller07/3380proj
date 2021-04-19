const { Op } = require("sequelize");
const db = require("../models/");
const CheckoutItem = db.checkoutItem;
const Customer = db.customer;
const Item = db.item;
const Employee = db.employee;

// Create and Save a new Checkout
exports.create = (req, res) => {
    const customer = Customer.findOne({
        where: {id: req.body.requester_id}
    })
    const item = Item.findOne({
        where: {id: req.body.item_id}
    })
    const employee = Employee.findOne({
        where: {id: req.body.employee_id}
    })
    const checkout_item = {
        item_id: item.id,
        checkout_date: req.body.req_date,
        return_date: req.body.return_date,
        returned: false,
        borrower_id: customer.id,
        employee_id: employee.id
    }

    // Save in the database
    CheckoutItem.create(checkout_item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new checkout"
            });
        });
}

// Retrieve all Checkouts from the database.
exports.findAll = (req, res) => {
    CheckoutItem.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving checkouts"
            }));
};

// Find a single Checkout with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CheckoutItem.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving checkout with id " + id
            });
        });
};

// Update an Item Request by the id
exports.update = (req, res) => {
    const id = req.params.id;

    CheckoutItem.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Checkout updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update checkout with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating item request with id " + id
            })
        })
};