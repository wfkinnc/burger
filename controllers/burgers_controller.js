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
    // calls the index page and sends the object
    res.render("index", brgrObject);
  });
});

router.post("/api/burger", function(req, res) {
//--------------------------------------------
// inserts the data..
//--------------------------------------------
   burger.insertOne(
       ["burger_name","devoured"],
       [req.body.burger_name,false], 
       function(result){
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

  burger.updateOne({
      devoured: req.body.devoured,
      date: "now()"

  }, condition, function(result){
        // need to send a response back to the calling ajax..
        // this res goes back to the ajax call in the main.handler..

    if (result.changedRow == 0){

        return res.status(404).end();

      } else {

        return res.status(200).json(result).end();
      }// end if

  })// end updateOne

});

// Export routes for server.js to use.
module.exports = router;
