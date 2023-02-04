const mongoose = require("mongoose");

// schema for sale
const SaleSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  brand: {
    type: String,
    required: [true, "Please enter brand name"],
  },
  transactionType: {
    type: String,
    required: [true, "Please enter transactionType"],
  },
  totalOrders: {
    type: Number,
    required: [true, "Please enter total Oders number"],
  },
  totalOrderValue: {
    type: Number,
    required: [true, "Please enter totalOrderValue Number"],
  },
  grossMarginPercentage: {
    type: Number,
    required: [true, "Please enter grossMarginPercentage Number"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

// exporting sale Schema/Model
module.exports = mongoose.model("SaleData", SaleSchema);
