const db = require("../models");
const config = require("../config/auth.config");
const Employee = db.employee;
const Customer = db.customer;

const { Op } = require("sequelize");

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

exports.signupEmployee = (req, res) => {
    // Save employee to database
    // TODO add password field and hash it
    Employee.create({
        //password: bcrypt.hashSync(req.body.password, 8)
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        ssn: req.body.ssn,
        birthdate: req.body.birthdate,
        salary: req.body.salary,
        job_title: req.body.job_title,
        phone_no: req.body.phone_no
    })
        .then(employee => {
        if (employee)
            res.send({ message: "Employee registered successfully!" })
    })
        .catch(err => {
            res.status(500).send({ message: err.message })
    })
}

exports.signinEmployee = (req, res) => {
    Employee.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(employee => {
            if (!employee) {
                return res.status(404).send({ message: "Employee not found" })
            }
            /*
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                employee.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                })
            }
            */
            let token = jwt.sign({ id: employee.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            })

            // send token to front end
            res.status(200).send({ accessToken: token })
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}

exports.signupCustomer = (req, res) => {
    // Save customer to database
    // TODO add password field and hash it
    Customer.create({
        //password: bcrypt.hashSync(req.body.password, 8)
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        customer_role: req.body.customer_role,
        birthdate: req.body.birthdate,
        acct_balance: 0.00,
        // Calculate item limit and fine rate based on role
        item_limit: (req.body.customer_role === "Faculty") ? 10 : 5,
        fine_rate: (req.body.customer_role === "Faculty") ? 0.50 : 0.25
    })
        .then(customer => {
            if (customer)
                res.status(200).send({
                    message: "Customer registered successfully!" })
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.signinCustomer = (req, res) => {
    Customer.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(customer => {
            if (!customer) {
                return res.status(404).send({ message: "Customer not found" })
            }
            /*
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                customer.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                })
            }
            */
            let token = jwt.sign({ id: customer.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            })

            // send token to front end
            res.status(200).send({ accessToken: token })
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}