import express from "express";
import prisma from "./config/connection.js"; 

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor rodando...");
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
