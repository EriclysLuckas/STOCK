import jwt from "jsonwebtoken"
import { User } from "../data/modeProduct.js";


export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" })

        }
        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ message: "E-mail já cadastrado" })

        const user = await User.create({ name, email, password, role: "admin" })

        res.status(201).json({
            message: "Usuário cadastrado com sucesso",
        })



    } catch (error) {
        res.status(500).json({ message: "Erro ao criar usuário" })
    }
}



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ message: "Email e senha são obrigatórios" });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: "Senha incorreta" });

        // 🔹 gera token JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login realizado com sucesso",
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
        console.log(user)
    } catch (err) {
        console.error("Erro no login:", err);
        res.status(500).json({ message: "Erro interno ao efetuar login" });
    }
};