import express  from 'express';
import {getProducts,createOrUpdateProduct,deleteProduct,getProductsById,updateProducts} from './src/controllers/productcontrollers.js'

const router = express.Router();


router.get('/products',getProducts)
router.get('/products/:id',getProductsById)
router.put('/products/:id',updateProducts)
router.post('/products',createOrUpdateProduct)
router.delete('/products/:id',deleteProduct)

export default router;
