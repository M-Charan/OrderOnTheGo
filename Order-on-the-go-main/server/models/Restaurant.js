import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  restaurantName: { type: String },
  ownerId: { type: String },
  address: { type: String },
  imageUrl: { type: String },
  rating: { type: Number },
  totalRatings: { type: Number },

  // ✅ Add this line
  isPromoted: { type: Boolean, default: false }
});

export default mongoose.model("Restaurant", restaurantSchema);
