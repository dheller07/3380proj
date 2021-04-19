const authors = require("../controllers/author.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to authors successful!"});
});

// Create a new Author
router.post("/", authors.create);

// Retrieve all Authors
router.get("/", authors.findAll);

// Retrieve a single Author with id
router.get("/:id", authors.findOne);

// Update an Author with id
router.put("/:id", authors.update);

// Delete an Author with id
router.delete("/:id", authors.delete);

// Delete all Authors
router.delete("/", authors.deleteAll);

module.exports = router;