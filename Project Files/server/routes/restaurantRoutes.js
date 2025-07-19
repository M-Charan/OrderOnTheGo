import express from 'express';
import {
  fetchPromotedRestaurants,
  fetchRestaurants,
  postRating
} from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/promoted', fetchPromotedRestaurants);
router.get('/all', fetchRestaurants); // ✅ ADD THIS
router.post('/rating', postRating);

export default router;
