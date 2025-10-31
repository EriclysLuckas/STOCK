import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // Se não houver token, redireciona para login
  if (!token) return <Navigate to="/login" />;

  // Se houver token, renderiza a rota filha
  return <Outlet />;
}