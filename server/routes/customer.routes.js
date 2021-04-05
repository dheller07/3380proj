module.exports = app => {
    const customers = require("../controllers/customer.controller.js");

    let router = require("express").Router();

    // Create a new Customer
    router.post("/", customers.create);

    // Retrieve all Customers
    router.get("/", customers.findAll);

    // Retrieve a single Customer with id
    router.get("/:id", customers.findOne);

    // Update an Customer with id
    router.put("/:id", customers.update);

    // Delete an Customer with id
    router.delete("/:id", customers.delete);

    // Delete all Customers
    router.delete("/", customers.deleteAll);

    app.use('/api/customers', router);
};