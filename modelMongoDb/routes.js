import express  from 'express';
import {getProducts,createProducts,deleteProduct,getProductsById,updateProducts} from './src/controllers/productcontrollers.js'

const router = express.Router();


router.get('/products',getProducts)
router.get('/products/:id',getProductsById)
router.put('/products/:id',updateProducts)
router.post('/products',createProducts)
router.delete('/products/:id',deleteProduct)

export default router;
