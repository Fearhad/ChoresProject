
const router = require("express").Router();
const choresControllers = require("../controllers/choresController");
//const passport = require("passport");
//const authenticated = require

router.route("/")
    .get(choresControllers.findAll) // Gets all chores
    .post(choreControllers.create); // Creates a chore

router.route("/:id")
    .get(choresControllers.findById) // Get a chore by id
    .put(choresControllers.update) // Update a chore by id
    .delete(choresControllers.remove); // delete a chore by id

module.exports = router;

