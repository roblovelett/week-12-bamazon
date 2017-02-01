-- 1. Create a MySQL Database called `Bamazon`. --
CREATE DATABASE Bamazon;

USE Bamazon;

-- 2. Then create a Table inside of that database called `products`. --

CREATE TABLE products (
-- * item_id (unique id for each product) -- 
-- * product_name (Name of product) -- 
-- * department_name -- 
-- * price (cost to customer) -- 
-- * stock_quantity (how much of the product is available in stores) -- 
	item_id INTEGER(30) auto_increment NOT NULL primary key,
	product_name VARCHAR(120) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
	stock_quantity INTEGER(30) NOT NULL
);

-- 4. Populate this database with around 10 different products. (i.e. Insert --
-- "mock" data rows into this database and table). --

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (001, "Chocolate Covered Artificial Squid Nuggets", "Food", 120.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Caramel Covered Artificial Dog", "Food", 100.25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Strawberry Flavored Golem", "Food", 75.15, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vanilla Flavored Conspiracy Theorist", "Food", 1.55, 4000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Radiographic Cloud Flutterer", "Electronics", 800.25, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Holographic Wharbler", "Electronics", 2.25, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Polyester Foot Washer", "Furniture", 99.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wooden Bed on Fire", "Furniture", 25.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("How To Make Enemies and Isolate From People", "Books", 225.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("How I Became An Underperforming Flutist", "Books", 2.00, 2000);