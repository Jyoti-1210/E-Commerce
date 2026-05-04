const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

//
// ADD TO CART
//
router.post(
  "/add",
  authMiddleware,
  addToCart
);

//
// GET CART
//
router.get(
  "/",
  authMiddleware,
  getCart
);

//
// REMOVE FROM CART
//
router.delete(
  "/:productId",
  authMiddleware,
  removeFromCart
);

module.exports = router;