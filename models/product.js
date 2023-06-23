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
      if (err) {
        console.error(err);
        return;
      }
      console.log(fileContent);
    });
  }

  //   static fetchAll() {
  //     return ;
  //   }
};
