var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cols, cb) {
    orm.selectAll("burgers", cols,  function(res) {
      // this function(result) comes from burger.js.
      // this cb(result) goes back to burger_controller..js

      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(result) {
      // this function(result) comes from burger.js.
      // this cb(result) goes back to burger_controller..js
      cb(result);
    });
  },
  updateOne: function(updateColumns, updateCond, cb) {
      orm.updateOne("burgers", updateColumns, updateCond, function(result) {
      // this function(result) comes from burger.js.
      // this cb(result) goes back to burger_controller..js
      cb(result);
     });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;