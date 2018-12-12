//const router = require('express').Router();
const childrenController = require('../controllers/childrenController') 
//const passport = require("passport");
//const authenticated = require

/* router.route('/children')
.get(childrenController.findAll)
.post(childrenController.create);



router.route("/children/:id")
    .get(childrenController.findById)  
    .put(childrenController.update) 
    .delete(childrenController.remove);  

module.exports = router;  */

module.exports = function(app) {
    app.get("/api/children", function(req,res) {
        childrenController.findAll(req, res);
    });

    app.post("/api/children", function(req, res) {
        childrenController.create(req, res);
        // res.send("OK");
    });

    app.get("/api/child/:id", function(req, res) {
        childrenController.findById(req, res)
    })
}
