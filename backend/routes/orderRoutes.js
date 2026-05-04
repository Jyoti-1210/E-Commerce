const express = require("express");

const router = express.Router();

const {

  createOrder,

  getAllOrders,

  getMyOrders,

  updateOrderStatus,

} = require("../controllers/orderController");

//
// ✅ CREATE ORDER
//
router.post(
  "/",
  createOrder
);

//
// ✅ GET MY ORDERS
//
router.get(
  "/my-orders",
  getMyOrders
);

//
// ✅ GET ALL ORDERS
//
router.get(
  "/",
  getAllOrders
);

//
// ✅ UPDATE ORDER STATUS
//
router.put(
  "/:id",
  updateOrderStatus
);

module.exports = router;