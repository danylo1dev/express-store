const express = require("express");
const path = require("path");
const adminData = require("./admin");

const router = express.Router();
const products = adminData.products;
router.get("/", (req, res) => {
  console.log(products);
  res.render("shop", { products, docTitle: "Shop" });
});
module.exports = router;
