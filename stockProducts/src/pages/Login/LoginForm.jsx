import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styleFormLogin from "./Login.module.css";
import { useAuth } from "../../hooks/auth";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha inválida"),
});

export default function LoginForm() {
  const { loginUser, loading, error } = useAuth(); // pegando login e erro do hook

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    await loginUser(data);
  };

  return (
    <div className={styleFormLogin.authWrapper}>
      <div className={styleFormLogin.authBox}>
        <h2 className={styleFormLogin.title}>Login</h2>

        <form className={styleFormLogin.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styleFormLogin.formGroup}>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={styleFormLogin.input}
            />
            {errors.email && (
              <span className={styleFormLogin.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styleFormLogin.formGroup}>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
              className={styleFormLogin.input}
            />
            {errors.password && (
              <span className={styleFormLogin.error}>{errors.password.message}</span>
            )}
          </div>

          {error && ( 
            <div className={styleFormLogin.apiError}>
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            className={styleFormLogin.button}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
          <button
            type="submit"
            className={styleFormLogin.buttonRegister}
            disabled={loading}
          >
           Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}