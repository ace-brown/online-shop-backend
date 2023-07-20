const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getProduct);

router.get("/products");

router.get("/cart", shopController.cart);

router.get("/checkout");

module.exports = router;
