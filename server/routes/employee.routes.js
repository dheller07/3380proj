const employees = require("../controllers/employee.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to employees successful!"});
});

// Create a new Employee
router.post("/", employees.create);

// Retrieve all Employees
router.get("/", employees.findAll);

// Retrieve a single Employee with id
router.get("/:id", employees.findOne);

// Update an Employee with id
router.put("/:id", employees.update);

// Delete an Employee with id
router.delete("/:id", employees.delete);

// Delete all Employees
router.delete("/", employees.deleteAll);

module.exports = router;