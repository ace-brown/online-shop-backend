const express = require("express");
const path = require("path");

const router = express.Router();

//**  /ad-product === /admin/ad-product
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "view", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
