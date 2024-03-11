const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

const products = [];
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add product" });
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = { router, products };
