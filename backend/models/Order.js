const mongoose =
  require("mongoose");

const orderSchema =
  new mongoose.Schema(

    {

      user: {
        type: String,
      },

      items: [

        {

          product: String,

          name: String,

          image: String,

          price: Number,

          quantity: Number,

        },

      ],

      shippingAddress: {

        name: String,

        mobile: String,

        address1: String,

        address2: String,

        state: String,

        pincode: String,

      },

      totalAmount: Number,

      paymentMethod: String,

      orderStatus: {

        type: String,

        default: "Placed",

      },

    },

    {
      timestamps: true,
    }

  );

module.exports =

  mongoose.models.Order ||

  mongoose.model(
    "Order",
    orderSchema
  );