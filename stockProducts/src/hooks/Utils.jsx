import { useState, useEffect, useCallback } from "react";

const BASE_URL = "http://localhost:3000/products";

export default function useUtils() {
  const [base, setBase] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Busca todos os produtos
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error("Erro ao buscar produtos");

      const jsonProducts = await response.json();
      setBase(jsonProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Busca inicial
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Adiciona novo produto (ou soma se já existir no backend)
  const addProduct = useCallback(async (newProduct) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Erro ao adicionar produto");

      const createdOrUpdated = await response.json();

      // Atualiza estado local: se já existe, substitui; senão, adiciona
      setBase((prev) => {
        const exists = prev.find((p) => p._id === createdOrUpdated._id);
        if (exists) {
          return prev.map((p) =>
            p._id === createdOrUpdated._id ? createdOrUpdated : p
          );
        }
        return [...prev, createdOrUpdated];
      });
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }, []);

  // Deleta produto
  const deleteProducts = useCallback(async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao deletar produto");

      setBase((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }, []);

  // Busca produto por ID
  const getProductId = useCallback(async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Erro ao buscar produto por ID");
    return await response.json();
  }, []);

  // Atualiza produto
  const updateProduct = useCallback(async (id, updatedProduct) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) throw new Error("Erro ao atualizar produto");

      const updated = await response.json();
      setBase((prev) =>
        prev.map((p) => (p._id === id ? { ...p, ...updated } : p))
      );
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }, []);

  return {
    base,
    loading,
    error,
    fetchData,
    addProduct,
    deleteProducts,
    getProductId,
    updateProduct,
  };
}
