import { useState, useEffect } from "react";

export default function useUtils() {
  const [base, setBase] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://stock-smoky.vercel.app/api/products");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonProducts = await response.json();
      setBase(jsonProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = async (newProducts) => {
    try {
      const response = await fetch("https://stock-smoky.vercel.app/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProducts),
      });
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      await fetchData();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const deleteProducts = async (id) => {
    try {
      const response = await fetch(`https://stock-smoky.vercel.app/api/products?id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      await fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const getProductId = async (id) => {
    try {
      const response = await fetch(`https://stock-smoky.vercel.app/api/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await fetch(`https://stock-smoky.vercel.app/api/products?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      await fetchData();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return { base, addProduct, deleteProducts, getProductId, updateProduct };
}
