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
    var product = []; //init

    var questions = [
        {
            type: 'input',
            name: 'id',
            /* The first should ask them the ID of the product they would like to buy. */
            message: 'Enter ID of product you are buying:',
            validate: function (val) {
                product_id = Number(val); //make ID a num
                for (i=0; i < products.length; i++) {
                    if (product_id === Number(products[i].item_id)) {
                        product = products[i]; 
                        return true; //if match
                    };
                };
                return 'Not a valid ID. Please enter matching numerical values.';
            }
        },
        {
            type: 'input',
            name: 'amount',
            /* The second message should ask how many units of the product they would like to buy.*/
            message: 'How many units are you purchasing?',
            validate: function (val) {
                var amt = Number(val);
                var stock = Number(product.stock_quantity);
                stock -= amt;
                if (stock >= 0) {
                    //do stuff
                    var price = Number(product.price);
                    var total = price * amt;
                    console.log('\n\Purchased. Total: ' + total); //output total
                    var query = "UPDATE products ";
                        query += "SET ";
                        query += "stock_quantity = " + stock + " ";
                        query += "WHERE item_id = " + product.item_id + ";";
                        connection.query(query, function (error, results, fields) {
                            if (error) throw error;
                        });
                    return true;
                } else if (stock < 0) {
                    return 'Not enough in stock to purchase this amount.';
                };
                return 'Not a valid amount. Please enter positive numerical values.';
            }
        },
        {
            type: 'input',
            name: 'continue',
            message: 'Do you want to make another purchase (Y/N) ?',
            validate: function (val) {
                var pass = val.match(/y/gi);
                if (pass) {
                    product.length = 0; //clear product array
                    listProducts(); //go back to listing table
                };
                console.log('Goodbye.');
                return true;
            }
        }
    ];

    inquirer.prompt(questions);
};