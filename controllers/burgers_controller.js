var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
//--------------------------------------------
// retrieves the data from the database..
//--------------------------------------------
    burger.selectAll("burger_name", function(data) {
    var brgrObject = {
      burgers: data
    };
    console.log(brgrObject);
    res.render("index", brgrObject);
  });
});

router.post("/api/burger", function(req, res) {
//--------------------------------------------
// inserts the data..
//--------------------------------------------
console.log(" getting insert route line 26, burger contorler");
   burger.insertOne(
       ["burger_name","devoured"],
       [req.body.burger_name,false], 
       function(result){
        console.log(" from burger contoller " + req.body.burger_name);
        console.log("from burger controller " + JSON.stringify(result));
        console.log("finished inserting form line 31 at burger controller " + result.insertId);
        result["burger_name"] = req.body.burger_name;
        // need to send a response back to the calling ajax..
        // this res goes back to the ajax call in the main.handler..
        res.status(200).json(result);
        //res.json(result)
      })

});

router.put("/api/burger/:id", function(req, res) {
//--------------------------------------------
// Update the data based upon the Burger ID.
//--------------------------------------------
  var condition = "id = " + req.params.id; 

  burger.updateOne  

  //updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
 // res.status(400).json("OK");
  // console.log("condition", condition);

  // cat.update({
  //   sleepy: req.body.sleepy
  // }, condition, function(result) {
  //   if (result.changedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
});

// Export routes for server.js to use.
module.exports = router;
