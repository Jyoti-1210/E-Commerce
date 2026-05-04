const mongoose = require("mongoose");

const addressSchema =
  new mongoose.Schema({

    name: String,

    mobile: String,

    address1: String,

    address2: String,

    state: String,

    pincode: String

  });

module.exports =
  mongoose.models.Address ||
  mongoose.model(
    "Address",
    addressSchema
  );

