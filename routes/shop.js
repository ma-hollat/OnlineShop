const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');

const adminData = require('./admin');

const router = express.Router();


router.get('/', function(req, res){
    const products = adminData.products;
    console.log("Hello from shop", products);
    res.render('shop', {
        pageTitle: "Welcome",
        welcomToMeShop: "Welcome To Me Shop",
        listOfProducts: products
    });

    //res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
});


module.exports = router;