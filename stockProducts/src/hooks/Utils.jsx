import { useState, useEffect, useCallback } from "react";
import InjetToken  from "./injetToken";

const BASE_URL = "//localhost:3000/products";

export default function useUtils() {
  const { apiFetch } = InjetToken(); 
  const [base, setBase] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //  Busca todos os produtos
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const jsonProducts = await apiFetch(BASE_URL);
      setBase(jsonProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [apiFetch]);

  //  Busca inicial
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //  Adiciona novo produto
  const addProduct = useCallback(async (newProduct) => {
    try {
      const createdOrUpdated = await apiFetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(newProduct),
      });

      setBase((prev) => {
        const exists = prev.find((p) => p._id === createdOrUpdated._id);
        return exists
          ? prev.map((p) =>
              p._id === createdOrUpdated._id ? createdOrUpdated : p
            )
          : [...prev, createdOrUpdated];
      });
    } catch (err) {
      setError(err.message);
    }
  }, [apiFetch]);

  //  Deleta produto
  const deleteProducts = useCallback(async (id) => {
    try {
      await apiFetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      setBase((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setError(err.message);
    }
  }, [apiFetch]);

  // Busca produto por ID
  const getProductId = useCallback(
    async (id) => await apiFetch(`${BASE_URL}/${id}`),
    [apiFetch]
  );

  //  Atualiza produto
  const updateProduct = useCallback(async (id, updatedProduct) => {
    try {
      const updated = await apiFetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
      });

      setBase((prev) =>
        prev.map((p) => (p._id === id ? { ...p, ...updated } : p))
      );
    } catch (err) {
      setError(err.message);
    }
  }, [apiFetch]);

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
