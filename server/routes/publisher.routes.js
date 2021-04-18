const publishers = require("../controllers/publisher.controller.js");

let router = require("express").Router();

// Create a new Publisher
router.post("/", publishers.create);

// Retrieve all Publisher
router.get("/", publishers.findAll);

// Retrieve a single Publisher with id
router.get("/:id", publishers.findOne);

// Update a Publisher with id
router.put("/:id", publishers.update);

// Delete a Publisher with id
router.delete("/:id", publishers.delete);

// Delete all Publishers
router.delete("/", publishers.deleteAll);


module.exports = router;