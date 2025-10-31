import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

export function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Função utilitária para requisições HTTP.
   * Encapsula o fetch e tratamento de erros.
   */
  const request = async (endpoint, options = {}) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${API_URL}${endpoint}`, options);
      const data = await res.json().catch(() => ({})); // evita erro se não vier JSON

      if (!res.ok) {
        // mensagens personalizadas por status
        const messages = {
          400: "Requisição inválida.",
          401: "Credenciais incorretas.",
          403: "Acesso negado.",
          404: "Recurso não encontrado.",
          500: "Erro no servidor.",
        };
        const message = data.message || messages[res.status] || "Erro desconhecido.";
        throw new Error(message);
      }

      return data;
    } catch (err) {
      console.error("Erro em request:", err);
      setError(err.message);
      throw err; // permite que a função chamadora saiba do erro
    } finally {
      setLoading(false);
    }
  };

  /**
   * Cadastra novo usuário
   */
  const registerUser = async (newUser) => {
    try {
      await request("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Faz login e salva token no localStorage
   */
  const loginUser = async ({ email, password }) => {
    try {
      const data = await request("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // salva token e dados do usuário
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");
    } catch {
      // erro já tratado no request
    }
  };


  return { registerUser, loginUser,  loading, error };

}
export default useAuth;
