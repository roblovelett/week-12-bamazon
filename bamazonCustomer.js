/*
5. Then create a Node application called `bamazonCustomer.js`. Running this
application will first display all of the items available for sale. Include the
ids, names, and prices of products for sale.

6. The app should then prompt users with two messages. * The first should ask
them the ID of the product they would like to buy. * The second message should
ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if
your store has enough of the product to meet the customer's request. * If not,
the app should log a phrase like `Insufficient quantity!`, and then prevent the
order from going through.

8. However, if your store *does* have enough of the product, you should fulfill
the customer's order. * This means updating the SQL database to reflect the
remaining quantity. * Once the update goes through, show the customer the total
cost of their purchase.
*/

var inquirer = require("inquirer");
var mysql = require("mysql");
var config = require("./configs.js")

var connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect();

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

console.log(connection);