const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const sellerMiddleware = require("../middleware/sellerMiddleware");

const {
  getSellerDashboard,
} = require("../controllers/dashboardController");

//
// SELLER DASHBOARD
//
router.get(
  "/seller",
  authMiddleware,
  sellerMiddleware,
  getSellerDashboard
);

module.exports = router;