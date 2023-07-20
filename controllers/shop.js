const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.cart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/shop/cart",
  });
};