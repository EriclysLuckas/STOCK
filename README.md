# STOCK – Sistema de Gestão de Produtos

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-00B0F0?style=for-the-badge&logo=render&logoColor=white)

---

## 🔗 Acesse o projeto

- **Frontend (Vercel):** [stock-smoky.vercel.app](https://stock-smoky.vercel.app)  
- **Backend (Render API):** `https://stock-la2f.onrender.com`  

---

## 🧩 Sobre o projeto

O STOCK é um projeto de estudos utilizando **React + Node.js + MongoDB**, focado em:

- CRUD completo de produtos (criar, listar, editar, deletar)
- Organização de rotas com React Router v6
- Componentes reutilizáveis (botões, tabelas, formulários)
- Integração real entre Frontend ↔ Backend via API
- Uso de hooks customizados e Context API
- Deploy completo no Vercel (frontend) e Render (backend)

**Status atual:**  
✅ CRUD funcional  
✅ Backend conectado ao MongoDB Atlas  
✅ Frontend consumindo a API do backend  

**Próximas melhorias:**  
- Autenticação de usuários com JWT  
- Proteção de rotas (roles: admin / usuário)  
- Upload de imagens de produtos  
- Dashboard com gráficos de produtos e categorias  

---

## 🚀 Funcionalidades

- Listagem de produtos: `/produtos/all`  
- Adição de novos produtos: `/produtos/newitem`  
- Edição de produtos: `/produtos/update/:id`  
- Exclusão de produtos com confirmação modal  
- Visualização detalhada de cada produto: `/produtos/:id`  

---

## 🔄 Fluxo de dados

O estado global é gerenciado pelo hook customizado `useBaseContext`:

- `fetchData()` → busca todos os produtos  
- `addProduct()` → adiciona produto  
- `deleteProducts()` → remove produto  
- `getProductId()` → retorna produto pelo ID  
- `updateProduct()` → atualiza produto existente  

**Fonte de dados:**  
- Atual: MongoDB Atlas (via Mongoose)  
- Futuro: suporte a múltiplos usuários com autenticação JWT  

---

## 🛠️ Tecnologias

- **Frontend:** React, React Router v6, ShadCN UI  
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Deploy:** Vercel (frontend), Render (backend)  
- **Extras:** Context API, Hooks customizados, Toast notifications  

---

## 🖥️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/EriclysLuckas/STOCK
cd STOCK/stockProducts
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env no backend com suas variáveis:

ini
Copiar código
DB_PASSWORD=SEU_PASSWORD
PORT=3000
Rode o backend:

bash
Copiar código
npm start
Rode o frontend:

bash
Copiar código
npm run dev
Acesse:

arduino
Copiar código
http://localhost:5173
💡 Observações
Projeto pronto para receber autenticação JWT.

Variáveis sensíveis como senha do banco são armazenadas em .env e no Render Environment Variables.

Estrutura organizada: backend separado (models, controllers, routes), frontend modularizado por páginas e componentes.
