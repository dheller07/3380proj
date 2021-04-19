const series = require("../controllers/series.controller.js");

let router = require("express").Router();

// Create a new Series
router.post("/", series.create);

// Retrieve all Series
router.get("/", series.findAll);

// Retrieve a single Series with id
router.get("/:id", series.findOne);

// Update a Series with id
router.put("/:id", series.update);

// Delete a Series with id
router.delete("/:id", series.delete);

// Delete all Series
router.delete("/", series.deleteAll);

module.exports = router;