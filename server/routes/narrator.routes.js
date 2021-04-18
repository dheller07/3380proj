const narrators = require("../controllers/narrator.controller.js");

let router = require("express").Router();

// Create a new Narrator
router.post("/", narrators.create);

// Retrieve all Narrator
router.get("/", narrators.findAll);

// Retrieve a single Narrator with id
router.get("/:id", narrators.findOne);

// Update an Narrator with id
router.put("/:id", narrators.update);

// Delete an Narrator with id
router.delete("/:id", narrators.delete);

// Delete all Narrators
router.delete("/", narrators.deleteAll);


module.exports = router;