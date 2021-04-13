const audiobooks = require("../controllers/audiobook.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to audiobooks successful!"});
});

// Create a new Audioook
router.post("/", audiobooks.create);

// Retrieve all Audiobooks
router.get("/", audiobooks.findAll);

// Retrieve a single Audiobook with id
router.get("/:id", audiobooks.findOne);

// Update an Audiobook with id
router.put("/:id", audiobooks.update);

// Delete an Audiobook with id
router.delete("/:id", audiobooks.delete);

// Delete all Audioooks
router.delete("/", audiobooks.deleteAll);

module.exports = router;