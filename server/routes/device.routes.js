const devices = require("../controllers/device.controller.js");

let router = require("express").Router();

// Check connection
router.get("/test", (req, res) => {
    res.send({message: "Connection to devices successful!"});
});

// Create a new Device
router.post("/", devices.create);

// Retrieve all Devices
router.get("/", devices.findAll);

// Retrieve all Devices that match search parameters
router.get("/search", devices.findThese);

// Retrieve a single Device with id
router.get("/:id", devices.findOne);

// Update a Device with id
router.put("/:id", devices.update);

// Delete a Device with id
router.delete("/:id", devices.delete);

// Delete all Devices
router.delete("/", devices.deleteAll);

module.exports = router;