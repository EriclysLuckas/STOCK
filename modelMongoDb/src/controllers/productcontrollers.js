import Product from '../data/modeProduct.js'






export const getProducts = async (req,res)=>{

const products = await Product.find()
res.json(products)

}


export const createProducts = async  (req, res) =>{
    
const {name, quantity, price, category,desc}    = req.body;
try{
const newProduct = await Product.create({name, quantity, price, category,desc})
res.status(200).json(newProduct)
}
catch(e){
res.status(400).json({e:e.message})
    console.error("Erro ao tentar cadastrar Produto", e)
}


}