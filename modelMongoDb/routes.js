import express  from 'express';
import {getProducts,createOrUpdateProduct,deleteProduct,getProductsById,updateProducts} from './src/controllers/product.controller.js'
import {registerAdmin, login} from "./src/controllers/auth.controller.js"
import {authRoutes} from "./src/middleware/middleware.js"

const router = express.Router();


router.get('/products',authRoutes,getProducts)
router.get('/products/:id',authRoutes,getProductsById)
router.put('/products/:id',authRoutes,updateProducts)
router.post('/products',authRoutes,createOrUpdateProduct)
router.delete('/products/:id',authRoutes,deleteProduct)
router.post('/login',authRoutes,login)
router.post('/register',registerAdmin)

export default router;
