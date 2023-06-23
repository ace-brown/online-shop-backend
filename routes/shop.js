const express = require("express");

const productData = require("../controllers/products");

const router = express.Router();

router.get("/", productData.getProduct);

module.exports = router;
