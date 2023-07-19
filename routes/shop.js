const path = require("path");

const express = require("express");

const productData = require("../controllers/products");

const router = express.Router();

router.get("/", productData.getProduct);

router.get("/shop", productData.cart);

module.exports = router;
