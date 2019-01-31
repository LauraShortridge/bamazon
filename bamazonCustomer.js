require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PASS,
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  displayProducts();
});

function displayProducts() {
  console.log("\n" + "Here is a list of our products:" + "\n");
  connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " " + res[i].product_name + " $" + res[i].price + "\n");
    }
    promptUser();
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the ID of the product you would like to purchase?",
        name: "ID"
      },
      {
        type: "input",
        message: "How many would you like to buy?",
        name: "quantity"
      }
    ])
    .then(answers => {
      connection.query("SELECT item_id, stock_quantity FROM products WHERE ?", { item_id: answers.ID }, function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (i = 0; i < res.length; i++) {
          var stock = res[i].stock_quantity;
        }
        if (answers.quantity <= stock) {
          fulfillOrder();
          function fulfillOrder() {
            connection.query("UPDATE products SET ? WHERE ?",
              [
                { stock_quantity: stock - answers.quantity },
                { item_id: answers.ID }
              ],
              function (err, res) {
                if (err) throw err;
              }
            )}
            connection.query("SELECT price FROM products WHERE ?", {item_id: answers.ID}, function(err, res) {
              for (i = 0; i < res.length; i++) {
                var finalPrice = res[i].price * answers.quantity; 
              }
              console.log("Here is your total cost: $" + finalPrice) + "\n";
            })
            console.log("\n" + "Order fulfilled!" + "\n");
    } else {
        console.log("\n" + "Insufficent quantity available to complete your order." + "\n");
        console.log("Please try again." + "\n");
        displayProducts();
      }
    })
  });
}