const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // ✅ PRODUCT NAME
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // ✅ DESCRIPTION
    description: {
      type: String,
      required: true,
    },

    // ✅ PRICE
    price: {
      type: Number,
      required: true,
    },

    // ✅ CATEGORY
    category: {
      type: String,
      required: true,
    },

    // ✅ MULTIPLE IMAGES
    images: [
      {
        type: String,
      },
    ],

    // ✅ STOCK COUNT
    stock: {
      type: Number,
      default: 1,
    },

    // ✅ PRODUCT RATING
    rating: {
      type: Number,
      default: 4,
    },

    // ✅ SELLER NAME
    seller: {
      type: String,
      default: "Shoppyx Seller",
    },

    // ✅ OPTIONAL BRAND
    brand: {
      type: String,
      default: "Shoppyx",
    },
  },

  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema);