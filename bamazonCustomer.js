/*

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
        askProducts(products);
    });
};
 
function askProducts(products) {
    /*6. The app should then prompt users with two messages.*/
    var product_id; //init
    var questions = [
  {
    type: 'input',
    name: 'id',
    /* The first should ask them the ID of the product they would like to buy. */
    message: 'Enter ID of product you are buying: ',
    validate: function (val) {
        product_id = Number(val); //make ID a num
        for (i=0; i < products.length; i++) {
            if (product_id === Number(products[i].item_id)) { 
                return true; //if match
            };
        };
        return 'ID ' + product_id + ' does not exist. Please enter a valid ID.'; //if no match
    }
  },
  {
    type: 'input',
    name: 'amount',
    /* The second message should ask how many units of the product they would like to buy.*/
    message: 'How many units are you purchasing? ',
    validate: function (val) {
        var product_qty = Number(product.stock_quantity);
        if (val.match([1-9999] && val < product.stock_quantity)) {
            var stock_qty = product.stock_quanity - val; //subtract val from stock in product table
            if (stock_qty < 0) {
                return 'Not enough in stock to purchase this amount.';
            } else {
                var total = product.price * val;
                var query = "UPDATE products";
                query += "SET ";
                query += "stockquantity = " + stock_qty;
                query += "WHERE item_id = " + product.item_id;
                connection.query(query, function (error, results, fields) {
                    if (error) throw error;
                });
                return 'Purchased. Total: ' + total;
            };
        };
        return 'Not a valid amount. Please enter positive numerical values.';
    }
  },
  {
    type: 'input',
    name: 'continue',
    message: 'Do you want to make another purchase (Y/N) ? ',
    validate: function (val) {
      var pass = value.match(/y/gi);
      if (pass) {
        listProducts();
      };
      return 'Goodbye!';
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});

};