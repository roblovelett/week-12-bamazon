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

var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require('./mysql.js'); //sql

console.log(connection);

/*
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

function PushData(sellerName, itemName, itemDesc, startPrice){
    this.sendData = function(){
        connection.query("INSERT INTO items SET ?", {
            item_name: itemName,
            seller_name: sellerName,
            item_desc: itemDesc,
            start_price: startPrice
        }, function(err, res){
            if (err) throw err;
            console.log(res);
        });
    }
}

function Item(data){
    this.test = function(){
        console.log(data)
    };
    this.postItem = function(){
        var askForItem = inquirer.prompt([
            {
                type: "input",
		        message: "What is your name?",
		        name: "sellerName"
            },
            {
                type: "input",
		        message: "What is the item's name?",
		        name: "itemName"
            },
            {
                type: "input",
		        message: "Please provide a short description of the item.",
		        name: "itemDesc"
            },
            {
                type: "input",
		        message: "What is the starting price?",
		        name: "startPrice"
            }
        ]).then(function(res){
            var push = new PushData(res.sellerName, res.itemName, 
            res.itemDesc, res.startPrice);
            push.sendData();
        });
    };
    this.bidItem = function(){
        
    };
}

var askForAction = inquirer.prompt([
	{
		type: "input",
		message: "Do you want to 'post' or 'bid' on an item?",
		name: "action"
	}

]).then(function(data){
   var newItem = new Item(data);
   if(data.action === 'post'){
       newItem.postItem();
   } else if(data.action === 'bid'){
       newItem.bidItem();
   }
});
*/

/*
var askForItem = inquirer.prompt([
            {
                type: "input",
		        message: "What is your name?",
		        name: "sellerName"
            },
            {
                type: "input",
		        message: "What is the item's name?",
		        name: "itemName"
            },
            {
                type: "input",
		        message: "Please provide a short description of the item.",
		        name: "itemDesc"
            },
            {
                type: "input",
		        message: "What is the starting price?",
		        name: "startPrice"
            }
        ]).then(function(res){
            console.log(res.itemDesc);
        });
*/