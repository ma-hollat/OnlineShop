const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const router = express.Router();
const products = [];

router.get('/add-product', function(req, res, next){    
    res.render('add-product',{
        pageTitle: "Add New Product",
        path: '/admin/add-product'
    });
    
    //res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

router.post('/add-product', function(req, res){
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.products = products;
//module.exports = router;