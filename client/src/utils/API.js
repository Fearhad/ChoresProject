import axios from "axios";

export default {

  /// ************* CHORES SECTION ******************

  // Get all chores
  getChores: function() {
    return axios.get("/api/chores");
  },
  // Gets the chore with the given id
  getChore: function(id) {
    return axios.get("/api/chores/" + id);
  },
  // Deletes the chore with the given id
  deleteChore: function(id) {
    return axios.delete("/api/chores/" + id);
  },
  // Saves a chore to the database
  saveChore: function(ChoreData) {
    return axios.post("/api/chores", ChoreData);
  },

    /// ************* FAMILY SECTION ******************
    
  // Get all families
  getAllFamily: function() {
    return axios.get("/api/family");
  },
  // Gets the familywith the given id
  getFamily: function(id) {
    return axios.get("/api/family/" + id);
  },
  // Deletes the family with the given id
  deleteFamily: function(id) {
    return axios.delete("/api/family/" + id);
  },
  // Saves a family to the database
  saveFamily: function(FamilyData) {
    return axios.post("/api/family", FamilyData);
  },

    /// ************* CHILDREN SECTION ******************
   
  // Get all children
  getChildren: function() {
    return axios.get("/api/children");
  },
  // Gets the children with the given id
  getChild: function(id) {
    return axios.get("/api/children/" + id);
  },
  // Deletes the children with the given id
  deleteChild: function(id) {
    return axios.delete("/api/children/" + id);
  },
  // Saves a childrento the database
  saveChild: function(ChildrenData) {
    return axios.post("/api/children", ChildrenData);
  }


};
