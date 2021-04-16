const { Op } = require("sequelize");
const db = require("../models/");
const Customer = db.customer;
/*
// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if(!req.body.l_name) {
        res.status(400).send({massage: "Customer last name must be included!!"})
    }

    // Create new customer record
    const customer = {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        customer_role: req.body.customer_role,
        birthdate: req.body.birthdate,
        acct_balance: 0.00,
        // Calculate item limit and fine rate based on role
        item_limit: (req.body.customer_role === "Faculty") ? 10 : 5,
        fine_rate: (req.body.customer_role === "Faculty") ? 0.50 : 0.25
    }

    // Save in the database
    Customer.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new customer record"
            });
        });
};
 */

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
            res.status(500).send({message: err.message || "An error occurred while retrieving customers"
            }));
};

// Find a single Customer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Customer.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving customer with id " + id
            });
        });
};

// Find a single customer by credentials
// TODO add username and password to db

// Update an Customer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Customer.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Customer updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update customer with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating customer with id " + id
            })
        })
};

// Delete an Customer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Customer.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Customer deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete customer with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting customer with id " + id
            })
        })
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Customer.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Customers were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all customers."
            });
        });
};

