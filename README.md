STOCK – Sistema de Gestão de Produtos

🔗 Acessos:

Frontend (Vercel): stock-smoky.vercel.app

Backend (Render API): https://stock-la2f.onrender.com

🧩 Sobre o projeto

O STOCK é um projeto de estudos com React + Node.js + MongoDB, focado em:

CRUD completo de produtos (criar, listar, editar, deletar)

Organização de rotas com React Router v6

Componentes reutilizáveis (botões, tabelas, formulários)

Integração real entre Frontend ↔ Backend via API

Uso de hooks customizados e Context API

Deploy completo no Vercel (frontend) e Render (backend)

Status atual:
✅ CRUD funcional
✅ Backend conectado ao MongoDB Atlas
✅ Frontend consumindo a API do backend

Próximas melhorias:

Autenticação de usuários com JWT

Proteção de rotas (roles: admin / usuário)

Upload de imagens de produtos

Dashboard com gráficos de produtos e categorias

🚀 Funcionalidades

Listagem de produtos: /produtos/all

Adição de novos produtos: /produtos/newitem

Edição de produtos: /produtos/update/:id

Exclusão de produtos com confirmação modal

Visualização detalhada de cada produto: /produtos/:id

🔄 Fluxo de dados

O estado global é gerenciado pelo hook customizado useBaseContext:

fetchData() → busca todos os produtos

addProduct() → adiciona produto

deleteProducts() → remove produto

getProductId() → retorna produto pelo ID

updateProduct() → atualiza produto existente

Fonte de dados:

Atual: MongoDB Atlas (via Mongoose)

Futuro: suporte a múltiplos usuários com autenticação JWT

🛠️ Tecnologias

Frontend: React, React Router v6, ShadCN UI

Backend: Node.js, Express, MongoDB, Mongoose

Deploy: Vercel (frontend), Render (backend)

Extras: Context API, Hooks customizados, Toast notifications

🖥️ Como rodar localmente

Clone o repositório:

git clone https://github.com/EriclysLuckas/STOCK
cd STOCK/stockProducts


Instale as dependências:

npm install


Crie um arquivo .env no backend com suas variáveis:

DB_PASSWORD=SEU_PASSWORD
PORT=3000


Rode o backend:

npm start


Rode o frontend:

npm run dev


Acesse:

http://localhost:5173

💡 Observações

Projeto pronto para receber autenticação JWT.

Variáveis sensíveis como senha do banco são armazenadas em .env e no Render Environment Variables.

Estrutura organizada: backend separado (models, controllers, routes), frontend modularizado por páginas e componentes.
