const Product = require("../models/Product");

//@desc     Fetch all products
//@routes   GET /api/products
//@access   PUBLIC
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

//@desc     Create product
//@routes   POST /api/products
//@access   PUBLIC
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: "Sample name3",
      amount: 3400,
      img: "/images/sample.jpg",
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { getProducts, createProduct };
