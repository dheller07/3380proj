const { Op } = require("sequelize");
const db = require("../models/");
const Employee = db.employee;

/*
// Create and Save a new Employee
exports.create = (req, res) => {
    // Validate request
    if(!req.body.l_name) {
        res.status(400).send({massage: "Employee last name must be included!!"})
    }

    // Create new employee record
    const employee = {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        ssn: req.body.ssn,
        birthdate: req.body.birthdate,
        salary: req.body.salary,
        job_title: req.body.job_title,
        phone_no: req.body.phone_no
    }

    // Save in the database
    Employee.create(employee)
        .then(data => {
            res.send(data);
    })
        .catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating new employee record"
        });
    });
};
*/

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    Employee.findAll()
        .then(data => {
            res.send(data);
        })
        .catch( err =>
        res.status(500).send({message: err.message || "An error occurred while retrieving employees"
        }));
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving employee with id " + id
            });
        });
};

// Find a single employee by credentials
// TODO add username and password to db

// Update an Employee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Employee updated successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot update employee with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating employee with id " + id
            })
        })
};

// Delete an Employee with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employee.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Employee deleted successfully! :)"
                });
            } else {
                res.send({
                    message: "Cannot delete employee with id " + id + ". Check that id is correct"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting employee with id " + id
            })
        })
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Employee.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Employees were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all employees."
                });
            });
    };
};

