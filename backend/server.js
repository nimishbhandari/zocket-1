const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const productRoutes = require("./routes/productRoutes");
const campaignRoutes = require("./routes/campaignRoutes");

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/campaigns", campaignRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
