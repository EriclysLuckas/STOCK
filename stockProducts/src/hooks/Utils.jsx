import { useState, useEffect } from "react";

export default function useUtils() {
  const [base, setBase] = useState([]);
  const BASE_URL = "https://stock-la2f.onrender.com/products";

  const fetchData = async () => {
    const response = await fetch(BASE_URL);
    const jsonProducts = await response.json();

    setBase(jsonProducts);
  };

  useEffect(() => {
    fetchData()
  }, []);


  const addProduct = async (newProducts) => {


    await fetch("https://stock-la2f.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProducts),
    })

    fetchData()
  }



  const deleteProducts = async (id) => {

    await fetch(`https://stock-la2f.onrender.com/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
    fetchData()
  }




  const getProductId = async (id) => {

    const response = await fetch(`https://stock-la2f.onrender.com/products/${id}`)
    const products = await response.json()


    return products
  };


  // Função para atualizar um produto
  const updateProduct = async (id, updatedProduct) => {
    await fetch(`https://stock-la2f.onrender.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct),
    });
    fetchData(); // Atualiza a lista de produtos após a atualização
  };

  return { base, addProduct, deleteProducts, getProductId, updateProduct }
}

