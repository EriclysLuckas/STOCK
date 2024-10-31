import { useState, useEffect } from "react";

export default function useUtils() {
  const [base, setBase] = useState([]);

    const fetchData = async () => {
      const response = await fetch("https://6723d042493fac3cf24c5624.mockapi.io/products");
      const jsonProducts = await response.json();

      setBase(jsonProducts);
    };
    
  useEffect(() => {
    fetchData()
  }, []);


  const addProduct = async (newProducts) => {
    

    await  fetch("https://6723d042493fac3cf24c5624.mockapi.io/products",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newProducts),
    })
   
    fetchData()
  }



  const deleteProducts = async (id) => {

    await fetch(`https://6723d042493fac3cf24c5624.mockapi.io/products/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    fetchData()
  }


  

  const getProductId=  async (id) => {

    const response = await fetch(`https://6723d042493fac3cf24c5624.mockapi.io/products/${id}`)
    const products = await response.json()

    
    return products
  };


  // Função para atualizar um produto
  const updateProduct = async (id, updatedProduct) => {
    await fetch(`https://6723d042493fac3cf24c5624.mockapi.io/products/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct),
    });
    fetchData(); // Atualiza a lista de produtos após a atualização
  };

 return {base, addProduct, deleteProducts, getProductId, updateProduct }
}

