drop database if exists burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;



CREATE TABLE burgers(
 id INT NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(100) NOT NULL,
 devoured BOOLEAN DEFAULT false,
 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 PRIMARY KEY(id)

);