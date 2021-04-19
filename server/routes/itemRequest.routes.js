const itemReqs = require("../controllers/itemRequest.controller.js");

let router = require("express").Router();

// Create a new item request
router.post("/", itemReqs.create);

// Retrieve all item requests
router.get("/", itemReqs.findAll);

// Retrieve a single item request with id
router.get("/:id", itemReqs.findOne);

// update a single item request with id
router.put("/:id", itemReqs.update);

module.exports = router;