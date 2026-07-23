//modules
const adminData = require("./admin");
const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getProduct,
  postCard,
  postCartDelete,
  postOrders,
} = require("../controllers/shop");
const {
  getAddProduct,
  postAddProduct,
  getProductsAdmin,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
} = require("../controllers/admin");
//built - in module
const path = require("path");
//3 party modules
const express = require("express");
const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/cart", getCart);

router.post("/cart", postCard);

router.post("/cart-delete-item", postCartDelete);

router.get("/orders", getOrders);

router.post("/create-order", postOrders);

// //dynamic segments
router.get("/products/:productId", getProduct);

module.exports = router;
