const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');

router.use('/admin/add-product', function(req, res, next){                   
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

module.exports = router;