const mongoose = require("mongoose");

require("dotenv").config();

const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {

    await Product.deleteMany({});

    console.log("All Products Deleted ✅");

    process.exit();

  })
  .catch((err) => {

    console.log(err);

  });