// import express from 'express';
import Restaurant from '../models/Restaurant.js';
import Admin from '../models/Admin.js';


const fetchRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    return res.status(200).json(restaurants);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


const fetchPromotedRestaurants = async (req, res) => {
  try {
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const promotedIds = admin.promotedRestaurants;

    const restaurants = await Restaurant.find({
      _id: { $in: promotedIds }
    });

    return res.status(200).json(restaurants);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const postRating = async (req, res) => {
  try {
    const { restaurantId, rating } = req.body;

    if (!restaurantId || typeof rating !== "number" || rating < 0 || rating > 5) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const currentTotal = restaurant.totalRatings || 0;
    const currentRating = restaurant.rating || 0;

    const newTotal = currentTotal + 1;
    const newAverageRating = ((currentRating * currentTotal) + rating) / newTotal;

    restaurant.rating = newAverageRating;
    restaurant.totalRatings = newTotal;

    await restaurant.save();

    return res.status(200).json({ message: "Rating submitted", updatedRestaurant: restaurant });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


export {fetchPromotedRestaurants,fetchRestaurants,postRating};