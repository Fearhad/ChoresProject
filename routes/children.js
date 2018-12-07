const router = require("express").Router();
const childrenControllers = require("../controllers/childrenController");
//const passport = require("passport");
//const authenticated = require

router.route("/")
    .get(childrenControllers.findAll) // 
    .post(childrenControllers.create); // 

router.route("/:id")
    .get(childrenControllers.findById) // 
    .put(childrenControllers.update) // 
    .delete(childrenControllers.remove); // 

module.exports = router;