const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.use("/", (req, res) => {
  res.send("ola");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
