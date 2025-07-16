import express from 'express';
import { adminLogin,promoteRestaurant } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login',adminLogin);
router.post('/promoteRestaurant/:restaurantId',promoteRestaurant);

export default router;