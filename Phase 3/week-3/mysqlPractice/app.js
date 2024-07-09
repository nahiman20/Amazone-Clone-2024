const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
// var cors = require("cors");

let app = express();


// app.use(cors());


// app.listen(3001, () => console.log("Listening to : 3001"));

const mysqlConnection = mysql.createConnection({
    database: 'myDB',
    user: 'myDBuser',
    password: 'myDBuser',
    host: 'localhost',
});
mysqlConnection.connect((err) => {
    if (err) console.log(err);
    else console.log("Connected to Db");
});

Q2 
app.get('/install', (req, res) => {

    const createProducts = `CREATE TABLE products(
    product_id int auto_increment,
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)
    )`;
    })

//   let createProductDescription = `CREATE TABLE if not exists ProductDescription(
//     description_id int auto_increment,
//     product_id int(11) not null,
//     product_brief_description TEXT not null,
//     product_description TEXT not null,
//     product_img varchar(255) not null,
//     product_link varchar(255) not null,
//     PRIMARY KEY (description_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
//   )`;
//   let createProductPrice = `CREATE TABLE if not exists ProductPrice(
//     price_id int auto_increment,
//     product_id int(11) not null,    
//     starting_price varchar(255) not null,
//     price_range varchar(255) not null,
//     PRIMARY KEY (price_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
//   )`;
//   mysqlConnection.query(createProducts, (err, results, fields) => {
//     if (err) console.log(err);
//   });
//   mysqlConnection.query(createProductDescription, (err, results, fields) => {
//     if (err) console.log(err);
//   });
//   mysqlConnection.query(createProductPrice, (err, results, fields) => {
//     if (err) console.log(err);
//   });

//   res.end(message);
// });