const Product = require("../models/Product");

//
// CREATE PRODUCT
//
const createProduct = async (req, res) => {
  try {

    const {
      name,
      price,
      description,
      category,
    } = req.body;

    // ✅ HANDLE IMAGES
    const imageUrls = req.files
      ? req.files.map((file) => file.path)
      : [];

    // ✅ CREATE PRODUCT
    const product = await Product.create({
      name,
      price,
      description,
      category,
      images: imageUrls,
      stock: true,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });

  } catch (error) {

    console.log("CREATE PRODUCT ERROR:", error);

    res.status(500).json({
      message: error.message,
    });

  }
};

//
// GET ALL PRODUCTS
//
const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

//
// GET SINGLE PRODUCT
//
const getSingleProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

//
// UPDATE PRODUCT
//
const updateProduct = async (req, res) => {
  try {

    const updatedProduct =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

//
// DELETE PRODUCT
//
const deleteProduct = async (req, res) => {
  try {

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

//
// EXPORTS
//
module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};