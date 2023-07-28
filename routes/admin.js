const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;

//  https://img.freepik.com/free-vector/vintage-sailing-wooden-pirate-boat_53876-111398.jpg?w=360&t=st=1690058429~exp=1690059029~hmac=b79e2c5eea5a9e09bc0e0a18361b692a1ec023bc94443e80b76856ef67aeff7c

// https://cdn.kobo.com/book-images/1f42928e-d763-4900-bbfc-cf93c7ab209f/1200/1200/False/great-expectations-135.jpg

// https://images.thalia.media/-/BF2000-2000/27a5faa985a34f77856be466eb066eff/mansfield-park-taschenbuch-jane-austen-englisch.jpeg
