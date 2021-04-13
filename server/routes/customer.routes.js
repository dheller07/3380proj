const customers = require("../controllers/customer.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to customers successful!"});
});

// Create a new Customer
router.post("/", customers.create);

// Retrieve all Customers
router.get("/", customers.findAll);

// Retrieve a single Customer with id
router.get("/:id", customers.findOne);

// Update a Customer with id
router.put("/:id", customers.update);

// Delete a Customer with id
router.delete("/:id", customers.delete);

// Delete all Customers
router.delete("/", customers.deleteAll);

module.exports = router;