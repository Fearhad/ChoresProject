const express = require("express");
const app = express();
const ChildrenDBRouter = express.Router();
const childrenDB = require("../models/children");
//const passport = require("passport");
//const authenticated = require

ChildrenDBRouter.route('/childrenDB')

 childrenDB.route("/childrenDB").get(function (req,res) {
     childrenDB.find(function (err, childrenDBs) {
         if (err) {
             console.log(err);
         } else {
             res.json(childrenDBs);
         }
     })
 })
    
router.route("/api/child/:id")
    .get(childrenControllers.findById)  
    .put(childrenControllers.update) 
    .delete(childrenControllers.remove);  

module.exports = ChildrenDBRouter; 