import express from 'express';
import { insertProduct,fetchProduct,updateProduct,deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/insert',insertProduct);
router.get('/fetch',fetchProduct);
router.post('/update/:productId',updateProduct);
router.post('/delete/:productId',deleteProduct);

export default router;