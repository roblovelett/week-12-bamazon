/*
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
var Table = require("cli-table");
var config = require("./configs.js")

var connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    listProducts();
});

/*
5. Then create a Node application called `bamazonCustomer.js`. Running this
application will first display all of the items available for sale. Include the
ids, names, and prices of products for sale.
*/
var listProducts = function() {
    var query = "SELECT * FROM products;";
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        var table = new Table({ //instantiate
            head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity']
        });
        var products = JSON.parse(JSON.stringify(results));
        for (i=0; i<products.length; i++) {
            table.push(
                [products[i].item_id, products[i].product_name, products[i].department_name,
                products[i].price, products[i].stock_quantity]
            );
        };
        console.log(table.toString());
    });
};
 

