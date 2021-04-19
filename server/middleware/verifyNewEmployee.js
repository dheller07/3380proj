const db = require("../models");
const Employee = db.employee;

checkDuplicateSsn = (req, res, next) => {
    // Find by ssn
    exports.findOne = (req, res) => {
        // SELECT 1 FROM employee WHERE ssn = [ssn]
        Employee.findOne({
            where: {
                ssn: req.body.ssn
            }
        })
            .then(user => {
                if (user) {
                    res.status(400).send({
                        message: "Failed! Employee is already in system"
                    });
                    return;
                }
                next();
            })
    }
}

const verifyNewEmployee = {checkDuplicateSsn: checkDuplicateSsn}

module.exports = verifyNewEmployee;