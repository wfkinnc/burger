/*

To run this file, we do the following in our Terminal:

1. populate the data

*/


USE burger_db;

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Bacon Cheeseburger', true, NOW());
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Mongo Burger', true, NOW());
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Plain Cheeseburger', true, NOW());