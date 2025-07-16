import Restaurant from "../models/Restaurant.js";
import Product from "../models/Product.js";

const insertProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      restaurantId,
      price,
      discount,
      category,
      imageUrl
    } = req.body;

    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const newProduct = new Product({
      productName,
      description,
      restaurantId,
      price,
      discount,
      category,
      imageUrl,
      rating: 0,
      totalRatings: 0
    });

    await newProduct.save();
    return res.status(201).json({ message: "Product inserted successfully", product: newProduct });

  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


const fetchProduct = async (req, res) => {
  try {
    const { restaurantId, category } = req.query;

    // Build dynamic filter
    const filter = {};
    if (restaurantId) filter.restaurantId = restaurantId;
    if (category) filter.category = category;
    if (req.query.id) filter._id = req.query.id;


    const products = await Product.find(filter);

    return res.status(200).json(products);

  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product updated", product: updatedProduct });

  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


export {insertProduct, fetchProduct, updateProduct, deleteProduct};