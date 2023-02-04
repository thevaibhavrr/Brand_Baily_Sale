const app = require("./app");
const dotenv = require("dotenv");
const database = require("./config/database");

// config file
require("dotenv").config();
// config file Path
dotenv.config({ path: "./config/config.env" });

// connect database
database();

// live server
app.listen(process.env.PORT, () => {
  console.log(`server is running on  ${process.env.PORT}`);
});
