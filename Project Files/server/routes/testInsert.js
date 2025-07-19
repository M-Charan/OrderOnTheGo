// server/routes/testInsert.js
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/addSample", async (req, res) => {
  try {
    const newProduct = new Product({
      productName: "Chicken Biryani",
      description: "Spicy biryani with rich flavors",
      price: 180,
      discount: 10,
      imageUrl: "/images/chickenbiryani.jpg",
      category: "biriyani",
      restaurantId: "12345"  // use a fixed or actual restaurantId
    });

    await newProduct.save();
    res.send("Sample product added");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

export default router;
