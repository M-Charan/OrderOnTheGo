import express from 'express';
import { registerUser,loginUser } from '../controllers/userAuthController.js';
import { registerRestaurant,loginRestaurant } from '../controllers/restaurantAuthController.js';
const router = express.Router();

router.post('/user/register',registerUser);
router.post('/user/login',loginUser);

router.post('/restaurant/register',registerRestaurant)
router.post('/restaurant/login',loginRestaurant)

export default router;