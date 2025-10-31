import LoginForm from "./LoginForm";
import { useAuth } from "../../hooks/auth";

export default function LoginAuth() {
  const { loginUser, loading, error } = useAuth();

  const handleLogin = async (formData) => {
    await loginUser(formData); // faz a requisição e navega
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin} />
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
