const Order =
  require("../models/Order");

//
// ✅ CREATE ORDER
//
exports.createOrder =
  async (req, res) => {

    try {

      const {

        user,

        items,

        shippingAddress,

        totalAmount,

        paymentMethod,

        orderStatus,

      } = req.body;

      const newOrder =
        new Order({

          user,

          items,

          shippingAddress,

          totalAmount,

          paymentMethod,

          orderStatus,

        });

      const savedOrder =
        await newOrder.save();

      res.status(201).json({
        message:
          "Order placed successfully",
        order: savedOrder,
      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to place order",
      });

    }

  };

//
// ✅ GET MY ORDERS
//
exports.getMyOrders =
  async (req, res) => {

    try {

      const orders =
        await Order.find()
          .sort({
            createdAt: -1,
          });

      res.json(orders);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to fetch orders",
      });

    }

  };

//
// ✅ GET ALL ORDERS
//
exports.getAllOrders =
  async (req, res) => {

    try {

      const orders =
        await Order.find()
          .sort({
            createdAt: -1,
          });

      res.json(orders);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to fetch orders",
      });

    }

  };

//
// ✅ UPDATE ORDER STATUS
//
exports.updateOrderStatus =
  async (req, res) => {

    try {

      const updatedOrder =
        await Order.findByIdAndUpdate(

          req.params.id,

          {
            orderStatus:
              req.body.orderStatus,
          },

          {
            new: true,
          }

        );

      res.json(updatedOrder);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to update order",
      });

    }

  };