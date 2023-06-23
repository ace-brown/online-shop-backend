const express = require("express");

const router = express.Router();

const productData = require("../controllers/products");

//**  /add-product === /admin/add-product
router.get("/add-product", productData.getAddProduct);

router.post("/add-product", productData.postAddProduct);

module.exports = router;
