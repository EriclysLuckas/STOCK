import jwt from "jsonwebtoken";
import {User} from "../data/modeProduct.js";

export const authRoutes = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // Bearer <token>
    if (!authHeader) return res.status(401).json({ message: "Token ausente" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(400).json({ message: "Formato do token inválido" });

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError")
        return res.status(401).json({ message: "Token expirado" });
      return res.status(401).json({ message: "Token inválido" });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    req.user = user; // usuário autenticado disponível nas rotas
    next();
  } catch (err) {
    console.error("Erro no verifyToken:", err);
    res.status(500).json({ message: "Erro interno no middleware" });
  }
};
