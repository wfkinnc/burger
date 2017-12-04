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

function addObjToSql(ob){
  var arr = [];

  for (var key in obj){

    var val = ob[key];
    if (Object.hasOwnProperty.call(ob,key)){
       if (typeof val === "string" && value.indexOf(" ")>= 0){
          val = "'" + val + "'";
       }// end if 
       arr.push(key + "=" + value);
    }// end if(object)
  }// end for
  return arr.toString();
} // end addObjToSql


var orm = {
    selectAll: function( colToSearch, tableInput, cb) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [ tableInput, colToSearch], function(err, result) {
        console.log("thsi sql " + this.sql)
        if (err) {
          throw err;
        }
        cb(result)
      });
    },
  insertOne: function(table, fields, val,cb) {
    //this cb is from burger.js and pass back the cb on line 56
    var queryString = "INSERT INTO ?? ( ?? ) VALUES (?)";
    //this fcn is part/parcel of the connect.query.
    connection.query(queryString, [table, fields, val], function(err, result) {
      console.log("this is insert sql " + this.sql)
      if (err) {
        throw err;
      }
        console.log("from line 56 " + result.insertId);
        cb(result);
      });
    
  },
  updateOne: function(tableOneCol, tableTwoForeignKey, table, tableTwo) {
    var queryString = "UPDATE " + table;
      queryString += " SET " ;
      queryString += addObjToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      
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
