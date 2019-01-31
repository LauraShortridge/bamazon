CREATE DATABASE bamazon_DB;

USE bamazon_DB; 

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL (10,2) NULL,
stock_quantity INTEGER(100) NULL,
primary key(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barbie", "Toys", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 469.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Appliances", 79.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Food", "Pets", 14.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cars DVD", "Movies", 19.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rug", "Home", 49.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Legos", "Toys", 25.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blanket", "Home", 69.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Toy", "Pets", 9.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ear Buds", "Electronics", 19.99, 125);

SELECT * FROM products;