import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styleFormLogin from "./Login.module.css";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha inválida"),
});

// eslint-disable-next-line
export default function LoginForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

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
            {errors.email && <span className={styleFormLogin.error}>{errors.email.message}</span>}
          </div>

          <div className={styleFormLogin.formGroup}>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
              className={styleFormLogin.input}
            />
            {errors.password && <span className={styleFormLogin.error}>{errors.password.message}</span>}
          </div>

          <button type="submit" className={styleFormLogin.button}>Entrar</button>
        </form>
      </div>
    </div>
  );
}
