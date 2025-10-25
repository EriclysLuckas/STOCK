import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CadastroStyle from "../Login.module.css";

const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z.string().min(6, "Confirme a senha"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Senhas não conferem",
  path: ["confirmPassword"],
});
//eslint-disable-next-line
export default function CadastroAuth({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className={CadastroStyle.authWrapper}>
      <div className={CadastroStyle.authBox}>
        <h2 className={CadastroStyle.title}>Cadastro</h2>
        <form className={CadastroStyle.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={CadastroStyle.formGroup}>
            <input
              type="text"
              placeholder="Nome"
              {...register("name")}
              className={CadastroStyle.input}
            />
            {errors.name && <span className={CadastroStyle.error}>{errors.name.message}</span>}
          </div>

          <div className={CadastroStyle.formGroup}>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={CadastroStyle.input}
            />
            {errors.email && <span className={CadastroStyle.error}>{errors.email.message}</span>}
          </div>

          <div className={CadastroStyle.formGroup}>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
              className={CadastroStyle.input}
            />
            {errors.password && <span className={CadastroStyle.error}>{errors.password.message}</span>}
          </div>

          <div className={CadastroStyle.formGroup}>
            <input
              type="password"
              placeholder="Confirme a senha"
              {...register("confirmPassword")}
              className={CadastroStyle.input}
            />
            {errors.confirmPassword && <span className={CadastroStyle.error}>{errors.confirmPassword.message}</span>}
          </div>

          <button type="submit" className={CadastroStyle.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
