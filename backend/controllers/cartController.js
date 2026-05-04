const User = require("../models/User");

//
// ADD TO CART
//
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const user = await User.findById(req.user.id);

    const existingProduct = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity += quantity || 1;
    } else {
      user.cart.push({
        product: productId,
        quantity: quantity || 1,
      });
    }

    await user.save();

    res.status(200).json({
      message: "Product added to cart",
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//
// GET CART
//
const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("cart.product");

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//
// REMOVE FROM CART
//
const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.cart = user.cart.filter(
      (item) =>
        item.product.toString() !== req.params.productId
    );

    await user.save();

    res.status(200).json({
      message: "Product removed from cart",
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};