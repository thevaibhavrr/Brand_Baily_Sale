const express = require("express");
const router = express.Router();
const data = require("../controller/saleController");

router.route("/brand_sales_daily").post(data.AddSaleData).get(data.getSaleData)

module.exports = router;
