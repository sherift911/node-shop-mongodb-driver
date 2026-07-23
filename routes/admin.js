const path = require("path");
// -------------------
// modules
const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getProduct,
  postCard,
  postCartDelete,
} = require("../controllers/shop");
const {
  getAddProduct,
  postAddProduct,
  getProductsAdmin,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
} = require("../controllers/admin");
//----------------------------------
const express = require("express");
const { title } = require("process");
const app = express();
const router = express.Router();

// store data
const product = [];

//rounting
// Get  /admin/
router.get("/add-product", getAddProduct);
router.get("/products", getProductsAdmin);
// Post  /admin/
router.post("/add-product", postAddProduct);
router.post("/delete-product", postDeleteProduct);
// //dynamic Routes
router.get("/edit-product/:productId", getEditProduct);
router.post("/edit-product", postEditProduct);

module.exports = router;
