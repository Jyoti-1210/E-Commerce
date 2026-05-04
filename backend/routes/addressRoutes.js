const express = require("express");

const router = express.Router();

const Address =
  require("../models/Address");

// =========================
// SAVE ADDRESS
// =========================

router.post("/", async (req, res) => {

  try {

    const address =
      new Address(req.body);

    const saved =
      await address.save();

    res.status(201).json(saved);

  }

  catch (error) {

    res.status(500).json({
      message:
        "Failed to save address"
    });

  }

});

// =========================
// GET ALL ADDRESSES
// =========================

router.get("/", async (req, res) => {

  try {

    const addresses =
      await Address.find();

    res.json(addresses);

  }

  catch (error) {

    res.status(500).json({
      message:
        "Failed to fetch addresses"
    });

  }

});

// =========================
// DELETE ADDRESS
// =========================

router.delete("/:id", async (req, res) => {

  try {

    await Address.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Address deleted"
    });

  }

  catch (error) {

    res.status(500).json({
      message:
        "Delete failed"
    });

  }

});

module.exports = router;
