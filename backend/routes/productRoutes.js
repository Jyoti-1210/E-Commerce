const express = require("express");

const router = express.Router();

// ✅ IMPORT MULTER/CLOUDINARY
const upload = require("../middleware/uploadMiddleware");

// ✅ IMPORT CONTROLLERS
const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//
// ✅ CREATE PRODUCT
//
router.post(
  "/",
  upload.array("images", 5),
  createProduct
);

//
// ✅ GET ALL PRODUCTS
//
router.get("/", getProducts);

//
// ✅ GET SINGLE PRODUCT
//
router.get("/:id", getSingleProduct);

//
// ✅ UPDATE PRODUCT
//
router.put("/:id", updateProduct);

//
// ✅ DELETE PRODUCT
//
router.delete("/:id", deleteProduct);

module.exports = router;