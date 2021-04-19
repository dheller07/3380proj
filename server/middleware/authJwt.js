const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Employee = db.employee;
const Customer = db.customer;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.employeeId = decoded.id;
        next();
    });
};

isEmployee = (req, res, next) => {
    Employee.findByPk(req.employeeId).then(employee => {
        if (employee) {
            next();
        }
    })
    res.status(403).send({ message: "Must be logged in as employee!!" });
}

isCustomer = (req, res, next) => {
    Customer.findByPk(req.employeeId).then(customer => {
        if (customer) {
            next();
        }
    })
    res.status(403).send({ message: "Must be logged in as customer!!" });
}

const authJwt = {
    verifyToken: verifyToken,
    isEmployee: isEmployee,
    isCustomer: isCustomer
}

module.exports = authJwt;