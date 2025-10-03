📦 Stock Products
🔗 Deploy

Frontend (Vercel): https://stock-smoky.vercel.app

Backend (Render): https://stock-backend.onrender.com

🧩 Sobre o projeto

O Stock Products nasceu como projeto inicial de estudos com React, evoluindo para um projeto fullstack com backend próprio.

Foco inicial:

Organização de rotas com React Router v6

Criação e consumo de componentes reutilizáveis

Uso de hooks customizados

Integração com API externa via MockAPI.io para CRUD de produtos

Status atual:

CRUD completo de produtos

Backend próprio com Node.js, Express e MongoDB (Mongoose)

Deploy: frontend no Vercel, backend no Render

Próximas melhorias:

Autenticação JWT

Melhor gerenciamento de estado e integração API ↔ frontend

🚀 Funcionalidades

Listagem de produtos: /produtos/all

Adição de novos produtos: /produtos/newitem

Remoção de produtos

Edição de produtos: /produtos/update/:id

Visualização detalhada: /produtos/:id

🔄 Fluxo de dados

O estado global é gerenciado por um hook customizado useUtils, responsável por se comunicar com a API:

fetchData → busca todos os produtos

addProduct → adiciona produto

deleteProducts → remove produto

getProductId → retorna produto pelo ID

updateProduct → atualiza produto existente

Fonte de dados:

Atual: MongoDB (Mongoose)

Antigo (Mock): MockAPI.io

🛠️ Tecnologias

Frontend:

React

React Router v6

CSS/SCSS

Vercel para deploy

Backend:

Node.js

Express

MongoDB (Mongoose)

Render para deploy

🖥️ Como rodar localmente

Clone o repositório:

git clone https://github.com/EriclysLuckas/STOCK.git
cd STOCK/stockProducts


Instale as dependências:

npm install


Rode em desenvolvimento:

npm start


Acesse em:

http://localhost:3000
