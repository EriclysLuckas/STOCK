import express  from 'express';
import {getProducts,createOrUpdateProduct,deleteProduct,getProductsById,updateProducts} from './src/controllers/product.controller.js'
import {registerAdmin, login, getUser} from "./src/controllers/auth.controller.js"
import {authRoutes} from "./src/middleware/middleware.js"

const router = express.Router();

//Rotas Produtos
router.get('/products',getProducts)
router.get('/products/:id',authRoutes,getProductsById)
router.put('/products/:id',authRoutes,updateProducts)
router.post('/products',authRoutes,createOrUpdateProduct)
router.delete('/products/:id',authRoutes,deleteProduct)


//Rotas Usuário
router.post('/login',login)
router.post('/register',registerAdmin)
router.get('/users',getUser)
export default router;
