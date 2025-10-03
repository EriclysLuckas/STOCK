# Stock Products

## 🔗 Acesse
- **Versão em produção (Frontend):** [stock-smoky.vercel.app](https://stock-smoky.vercel.app)
- **API Backend:** Hospedada no Render com Node.js, Express e MongoDB

---

## 🧩 Sobre o projeto
O **Stock Products** nasceu como projeto inicial de estudos com React, com foco em:

- Organização de rotas com React Router v6
- Criação e consumo de componentes reutilizáveis
- Uso de hooks customizados
- Integração com API própria para CRUD de produtos

**Status atual:**

- CRUD completo de produtos
- Backend próprio com Node.js, Express e MongoDB (Mongoose)
- Refatoração para melhor integração frontend ↔ backend

**Próximas melhorias:**

- Autenticação JWT
- Melhor gerenciamento de estado global

---

## 🚀 Funcionalidades

- **Listagem de produtos:** `/produtos/all`  
- **Adição de novos produtos:** `/produtos/newitem`  
- **Remoção de produtos**  
- **Edição de produtos:** `/produtos/update/:id`  
- **Visualização detalhada:** `/produtos/:id`

---

## 🔄 Fluxo de dados
O estado global é gerenciado pelo hook customizado `useUtils`, responsável por se comunicar com a API:

- `fetchData` → busca todos os produtos  
- `addProduct` → adiciona produto  
- `deleteProducts` → remove produto  
- `getProductId` → retorna produto pelo ID  
- `updateProduct` → atualiza produto existente  

**Fonte de dados:**

- Atual: MongoDB via Mongoose (backend próprio)  
- Antes: MockAPI.io

---

## 🛠️ Tecnologias

- **Frontend:** React, React Router v6, Vercel  
- **Backend:** Node.js, Express, MongoDB (Mongoose), Render  
- **Autenticação (em breve):** JWT  

---

## 🖥️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/EriclysLuckas/STOCK.git
cd STOCK/stockProducts

# Instale as dependências
npm install

# Rode em desenvolvimento
npm start

# Acesse em:
http://localhost:3000
🔗 Observações de deploy
O frontend será hospedado na Vercel

O backend será hospedado no Render, conectado ao MongoDB Atlas

Lembre-se de ajustar o .env do backend com sua URL do MongoDB e porta
