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
 */

module.exports = class Cart {
  static addProduct() {
    fs.readFile(filePath, (err, fileContent) => {
      let cart = { product: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
    });
  }
};
