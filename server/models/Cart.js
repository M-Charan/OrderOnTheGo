import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }
  ],
  totalPrice: Number
});

export default mongoose.model("Cart", cartSchema);
