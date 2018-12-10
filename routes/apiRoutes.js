
const controllers = require("../controllers");
const router = require("express").Router();


router.route("/chores")
    .get(controllers.chores.getAll)
    .post(controllers.chores.create)