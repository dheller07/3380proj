const magazines = require("../controllers/magazine.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to magazines successful!"});
});

// Create a new Magazine
router.post("/", magazines.create);

// Retrieve all Magazines
router.get("/", magazines.findAll);

// Retrieve a single Magazine with id
router.get("/:id", magazines.findOne);

// Update a Magazine with id
router.put("/:id", magazines.update);

// Delete a Magazine with id
router.delete("/:id", magazines.delete);

// Delete all Magazines
router.delete("/", magazines.deleteAll);

module.exports = router;