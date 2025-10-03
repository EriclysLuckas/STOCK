import express  from 'express';
import {getProducts,createProducts} from './src/controllers/productcontrollers.js'

const router = express.Router();


router.get('/products',getProducts)
router.post('/products',createProducts)


export default router;
