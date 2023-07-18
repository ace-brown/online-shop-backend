const fs = require("fs");
const path = require("path");

const dirName = require("../utils/path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const filePath = path.join(dirName, "data", "products.json");
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
    const filePath = path.join(dirName, "data", "products.json");
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        cb([]);
      }

      cb(JSON.parse(fileContent));
    });
  }
};
