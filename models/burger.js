var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cols, cb) {
    orm.selectAll("burgers", cols,  function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(result) {
      // this function(result) comes from burger.js.
      console.log("running from line 17 in model/burger.js " + result)
      // this cb(result) goes back to burger_controller..js
      cb(result);
    });
  },
  updateOne: function(updateColumns, updateData, cb) {
    orm.update("burgers", updateColumns, updateData, function(res) {
        console.log(" running from line 25 in models/burgers.js " + res);
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;