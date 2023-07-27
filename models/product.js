const fs = require("fs");
const path = require("path");

const filePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getPoductsFromFile = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getPoductsFromFile((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);

        fs.writeFile(filePath, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static delete(id) {
    getPoductsFromFile((products) => {
      const updatedProducts = products.filter((prod) => prod.id !== id);
      fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
        }
      });
    });
  }

  static fetchAll(cb) {
    getPoductsFromFile(cb);
  }

  static findById(id, cb) {
    getPoductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
