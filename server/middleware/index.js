const authJwt = require("./authJwt");
const verifyNewEmployee = require("./verifyNewEmployee");

// TODO add new customer verification (check for duplicates)

module.exports = {
    authJwt,
    verifyNewEmployee
};
