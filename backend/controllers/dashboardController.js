const Order = require("../models/Order");
const Product = require("../models/Product");

//
// SELLER DASHBOARD
//
const getSellerDashboard = async (req, res) => {
  try {
    // Find seller products
    const sellerProducts = await Product.find({
      sellerId: req.user.id,
    });

    const productIds = sellerProducts.map(
      (product) => product._id.toString()
    );

    // Find orders containing seller products
    const orders = await Order.find()
      .populate("orderItems.product");

    let totalRevenue = 0;
    let totalProductsSold = 0;
    let totalOrders = 0;

    orders.forEach((order) => {
      let sellerOrder = false;

      order.orderItems.forEach((item) => {
        if (
          item.product &&
          productIds.includes(item.product._id.toString())
        ) {
          totalRevenue +=
            item.product.price * item.quantity;

          totalProductsSold += item.quantity;

          sellerOrder = true;
        }
      });

      if (sellerOrder) {
        totalOrders++;
      }
    });

    res.status(200).json({
      totalRevenue,
      totalProductsSold,
      totalOrders,
      totalProducts: sellerProducts.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getSellerDashboard,
};