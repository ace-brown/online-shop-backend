const fs = require("fs");
const path = require("path");

const getPoductsFromFile = (cb) => {
  const filePath = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return cb([]);
    }

    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const filePath = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }

      products.push(this);

      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getPoductsFromFile(cb);
  }
};
