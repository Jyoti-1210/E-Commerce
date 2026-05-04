require("dotenv").config();

const connectDB = require("./config/db");

const Product = require("./models/Product");

const products = require("./data/products");

const seedProducts = async () => {

  try {

    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("200 Products Added ✅");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedProducts();