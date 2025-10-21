import Product from '../data/modeProduct.js'






export const getProducts = async (req, res) => {

  const products = await Product.find()
  res.json(products)

}
export const getProductsById = async (req, res) => {
  try {
    let { id } = req.params;


    const productById = await Product.findById(id)

    if (!productById) {
      return res.status(404).json({ message: "Produto não encontrado " })
    }
    res.json(productById)

  }
  catch (e) {
    res.status(500).json({ message: e })
  }
}


export const createOrUpdateProduct = async (req, res) => {
  try {
    const { name, quantity, price, desc, category } = req.body;

    if (!name || typeof quantity !== "number" || !category) {
      return res.status(400).json({ error: "Dados inválidos" });
    }

    // normaliza strings
    const nameNormalized = name.trim().toLowerCase();
    const categoryNormalized = category.trim().toLowerCase();

    // procura produto existente
    const existing = await Product.findOne({
      name: { $regex: `^${nameNormalized}$`, $options: "i" },
      category: { $regex: `^${categoryNormalized}$`, $options: "i" }
    });

    if (existing) {
      // atualiza produto existente
      existing.quantity += quantity;
      if (price && price !== existing.price) existing.price = price;
      if (desc && desc !== existing.desc) existing.desc = desc;

      const updated = await existing.save();
      return res.status(200).json(updated);
    }

    // cria novo produto
    const created = await Product.create({
      name: nameNormalized,
      category: categoryNormalized,
      quantity,
      price,
      desc,
    });

    return res.status(201).json(created);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};



export const updateProducts = async (req, res) => {

  try {
    const { id } = req.params;
    const data = req.body;


    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true })

    if (!updatedProduct) {
      return res.status(400).json({ message: "Produto não encontrado" })
    }
    res.json(updatedProduct)

  }
  catch (e) {
    res.status(500).json({ message: "Erro ao tentar atualizar Produto" }, e)

  }

}

export const deleteProduct = async (req, res) => {

  try {
    let { id } = req.params

    const productIdDelet = await Product.findByIdAndDelete(id);

    if (!productIdDelet) {

      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json({ message: "Produto deletado com sucesso." })

  }
  catch (e) {
    res.status(500).json({ e: e.message })
    console.log("Erro ao tentar excluir Produto.")
  }
}


