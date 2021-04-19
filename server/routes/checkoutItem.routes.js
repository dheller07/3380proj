const checkoutItem = require("../controllers/checkoutItem.controller.js");

let router = require("express").Router();

// Create a new checkout
router.post("/", checkoutItem.create);

// Retrieve all checkout
router.get("/", checkoutItem.findAll);

// Retrieve a single checkout with id
router.get("/:id", checkoutItem.findOne);

// update a single checkout with id
router.put("/:id", checkoutItem.update);

module.exports = router;