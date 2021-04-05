const books = require("../controllers/book.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to books successful!"});
});

// Create a new Book
router.post("/", books.create);

// Retrieve all Books
router.get("/", books.findAll);

// Retrieve a single Book with id
router.get("/:id", books.findOne);

// Update an Book with id
router.put("/:id", books.update);

// Delete an Book with id
router.delete("/:id", books.delete);

// Delete all Books
router.delete("/", books.deleteAll);

module.exports = router;