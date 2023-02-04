// connecting with database
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const DataBaseConnect = () => {
  mongoose
    .connect(process.env.DB_URI, {
      // permission
      usenewurlparser: true,
      useunifiedtopology: true,
    })
    .then(() => {
      console.log("mongodb database connected with server");
    });
};

module.exports = DataBaseConnect;
