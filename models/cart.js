const fs = require("fs");
const path = require("path");

const filePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "cart.json"
);

/**
 *
 * @description This is a cart class to manage the content of the cart.
 * @param {array} product - array of all products in the cart
 * @param {number} totalPrice - total price of the each product in cart
 */

module.exports = class Cart {
  // Handle adding a product in the cart
  static addProduct(id, productPrice) {
    fs.readFile(filePath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      // Checking the existing item in cart
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      // Add product to cart and increase the quantity
      if (existingProduct) {
        // If we have an existing product, we don't add a new product, instead we want to replace the old one
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        // Creating new product for the first time
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      // Increase the Price
      cart.totalPrice = cart.totalPrice + +productPrice;

      // Write the cart back to the file
      fs.writeFile(filePath, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
