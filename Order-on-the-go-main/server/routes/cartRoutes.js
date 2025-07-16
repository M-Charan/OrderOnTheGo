import express from 'express';
import { addToCart,getCartItems,deleteFromCart } from '../controllers/cartController.js';

const router = express.Router();

router.post("/addItem",addToCart);
router.get('/getItems',getCartItems);
router.post('/deleteItem',deleteFromCart);

export default router;