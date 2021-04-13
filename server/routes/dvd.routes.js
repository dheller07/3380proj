const dvds = require("../controllers/dvd.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to dvds successful!"});
});

// Create a new DVD
router.post("/", dvds.create);

// Retrieve all DVDs
router.get("/", dvds.findAll);

// Retrieve a single DVD with id
router.get("/:id", dvds.findOne);

// Update a DVD with id
router.put("/:id", dvds.update);

// Delete a DVD with id
router.delete("/:id", dvds.delete);

// Delete all DVDs
router.delete("/", dvds.deleteAll);

module.exports = router;