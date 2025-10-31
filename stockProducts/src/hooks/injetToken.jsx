import { useCallback } from "react";

export default function InjetToken() {
  const apiFetch = useCallback(async (url, options = {}) => {
    const token = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // injeta token
      ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || "Erro na requisição");
    return data;
  }, []);

  return { apiFetch };
}
