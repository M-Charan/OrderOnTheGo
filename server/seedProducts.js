// server/seedProducts.js
import mongoose from "mongoose";
import Product from "./models/Product.js";

mongoose.connect("mongodb://localhost:27017/SBfoods")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

const sampleProducts = [
  {
    productName: "Chicken Biryani",
    description: "Delicious and spicy biryani",
    price: 180,
    discount: 10,
    imageUrl: "/images/chickenbiryani.jpg",
    category: "biriyani",
    restaurantId: "123"
  },
  {
    productName: "Paneer Butter Masala",
    description: "Creamy paneer curry",
    price: 150,
    discount: 5,
    imageUrl: "/images/paneer.jpg",
    category: "veg",
    restaurantId: "123"
  },
  {
    productName: "Veg Meals",
    description: "Traditional South Indian meals",
    price: 120,
    discount: 0,
    imageUrl: "/images/meals.jpg",
    category: "meals",
    restaurantId: "123"
  },
  {
    productName: "Idli Sambar",
    description: "Soft idlis with hot sambar",
    price: 40,
    discount: 0,
    imageUrl: "/images/idli.jpg",
    category: "breakfast",
    restaurantId: "123"
  },
  {
    productName: "Chicken Fry",
    description: "Spicy fried chicken",
    price: 160,
    discount: 15,
    imageUrl: "/images/chickenfry.jpg",
    category: "non-veg",
    restaurantId: "123"
  }
];

async function seed() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log("✅ Sample products inserted!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Insert failed:", err);
  }
}

seed();
