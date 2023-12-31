const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.get('/contact-us', productsController.contactUs);

router.post('/success', productsController.success);
  

module.exports = router;
