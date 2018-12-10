
const router = require("express").Router();
const familyControllers = require("../../controllers/familyController");
//const passport = require("passport");
//const authenticated = require

router.route("/")
    .get(familyControllers.findAll) // 
    .post(familyControllers.create); // 

router.route("/:id")
    .get(familyControllers.findById) // 
    .put(familyControllers.update) // 
    .delete(familyControllers.remove); // 

module.exports = router;

