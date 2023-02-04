const Sale = require("../Model/salesSchema");

// add data for sale
const AddSaleData = async (req, res) => {
  try {
    const {
      date,
      brand,
      transactionType,
      totalOrders,
      totalOrderValue,
      grossMarginPercentage,
      createdAt,
      updatedAt,
    } = req.body;

    // storing data in datavase
    const saleData = await Sale.create({
      date,
      brand,
      transactionType,
      totalOrders,
      totalOrderValue,
      grossMarginPercentage,
      createdAt,
      updatedAt,
    });
    // succesfull save data
    res.status(200).json({ sale: saleData });
  } catch (error) {
    // if get any error
    res.json({ error: error });
  }
};

const getSaleData= async(req,res)=>{
  const sales = await Sale.find()
  res.json(sales)
}

module.exports = { AddSaleData,getSaleData };
