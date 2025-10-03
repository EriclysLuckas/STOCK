import Product from '../data/modeProduct.js'






export const getProducts = async (req, res) => {

    const products = await Product.find()
    res.json(products)

}
export const getProductsById = async (req, res) => {
  try{
      let  {id} = req.params;


    const productById = await Product.findById(id)

    if(!productById){
       return  res.status(404).json({message:"Produto não encontrado "})
    }
    res.json(productById)

  }
  catch(e){
    res.status(500).json({message:e})
  }
}


export const createProducts = async (req, res) => {

    const { name, quantity, price, category, desc } = req.body;
    try {
        const newProduct = await Product.create({ name, quantity, price, category, desc })
         res.status(200).json(newProduct)
    }
    catch (e) {
        res.status(400).json({ e: e.message })
        console.error("Erro ao tentar cadastrar Produto", e)
    }

}



export const updateProducts = async(req,res) =>{

try{
    const {id} = req.params;
    const data = req.body;


    const updatedProduct = await Product.findByIdAndUpdate(id,data,{new:true})

    if(!updatedProduct){
        return res.status(400).json({message:"Produto não encontrado"})
    }
    res.json(updatedProduct)

}
catch(e){
        res.status(500).json({message:"Erro ao tentar atualizar Produto"},e)

}

}

export const deleteProduct = async (req, res) => {

    try {
        let  { id } = req.params

        const productIdDelet = await  Product.findByIdAndDelete(id);

        if (!productIdDelet) {

            return res.status(404).json({ message: "Produto não encontrado" });
        }
        res.status(200).json({ message: "Produto deletado com sucesso."})

    }
    catch (e) {
        res.status(500).json({ e: e.message })
        console.log("Erro ao tentar excluir Produto.")
    }
}