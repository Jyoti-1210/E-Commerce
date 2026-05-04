const Address =
  require("../models/Address");

//
// ✅ ADD ADDRESS
//
exports.addAddress =
  async (req, res) => {

    try {

      const address =
        new Address(req.body);

      const savedAddress =
        await address.save();

      res.status(201).json(
        savedAddress
      );

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to save address",
      });

    }

  };

//
// ✅ GET ALL ADDRESSES
//
exports.getAddresses =
  async (req, res) => {

    try {

      const addresses =
        await Address.find().sort({
          createdAt: -1,
        });

      res.json(addresses);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to fetch addresses",
      });

    }

  };

//
// ✅ DELETE ADDRESS
//
exports.deleteAddress =
  async (req, res) => {

    try {

      await Address.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Address deleted",
      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to delete address",
      });

    }

  };