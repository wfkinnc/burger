var connection = require("../config/connection.js");
//----------------------------------------------
// Object Relational Mapper (ORM)
//----------------------------------------------

//----------------------------------------------
// Adds  Question Marks to the IONsert String.
//----------------------------------------------
function addQuestionMarks(val){
  var arr = [];

  for (var i = 0; i < num; i++){

    arr.push("?")
  }// end for var

}// end function

function addObjToSql(obj){
  var arr = [];

  for (var key in obj){

    var val = obj[key];
    if (Object.hasOwnProperty.call(obj,key)){
       if (typeof val === "string" && val.indexOf(" ")>= 0){
          val = "'" + val + "'";
       }// end if 
       arr.push(key + "=" + val);
    }// end if(object)
  }// end for
  return arr.toString();
} // end addObjToSql


var orm = {
    selectAll: function( tableToGet, colToGet, cb) {
      var queryString = "SELECT ?? FROM ??";
      //this cb is from burger.js and pass back the cb on line 56
      //this fcn is part/parcel of the connect.query.
      connection.query(queryString, [ colToGet, tableToGet], function(err, result) {
        console.log("thsi sql " + this.sql)
        if (err) {
          throw err;
        }
        cb(result)
      });
    },
  insertOne: function(table, fields, val,cb) {
    var queryString = "INSERT INTO ?? ( ?? ) VALUES (?)";
    //this cb is from burger.js and pass back the cb on line 56
    //this fcn is part/parcel of the connect.query.
    connection.query(queryString, [table, fields, val], function(err, result) {
      console.log("this is insert sql " + this.sql)
      if (err) {
        throw err;
      }
        cb(result);
      });
  },
  updateOne: function(table, objColVals, condition,cb) {
    var queryString = "UPDATE " + table;
      queryString += " SET " ;
      queryString += addObjToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
    //this cb is from burger.js and pass back the cb on line 56
    //this fcn is part/parcel of the connect.query.
      connection.query(queryString,  function(err, result) {
        console.log("this is update sql " + this.sql)
        if (err){

          throw err;
        }
        cb(result);
      });
  }
};

module.exports = orm;
