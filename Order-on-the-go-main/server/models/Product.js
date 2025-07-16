import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  discount: Number,
  description: String,
  imageUrl: String,
  restaurantId: String // <- this is the key part
});

export default mongoose.model("Product", productSchema);
