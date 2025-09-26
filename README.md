### Stock Products

> Aplicação de estudo em React com CRUD completo de produtos e refatoração em andamento para backend próprio.
> 

---

### 🔗 Acesse

- Versão em produção: [stock-smoky.vercel.app](http://stock-smoky.vercel.app)

---

### 🧩 Sobre o projeto

O Stock Products nasceu como projeto inicial de estudos com React, com foco em:

- Organização de rotas com React Router v6
- Criação e consumo de componentes reutilizáveis
- Uso de hooks customizados
- Integração com API externa via [MockAPI.io](http://MockAPI.io) para CRUD de produtos

Status atual:

- CRUD completo de produtos
- Em refatoração para incluir backend próprio, banco de dados e melhorias de integração

Próximas melhorias:

- Backend com Node.js e Express
- Banco de dados MongoDB
- Melhor gerenciamento de estado e integração API ↔ frontend

---

### 🚀 Funcionalidades

- Listagem de produtos: `/produtos/all`
- Adição de novos produtos: `/produtos/newitem`
- Remoção de produtos
- Edição de produtos: `/produtos/update/:id`
- Visualização detalhada: `/produtos/:id`

---

### 🔄 Fluxo de dados

O estado global é gerenciado por um hook customizado, `useUtils`, responsável por se comunicar com a API:

- `fetchData` → busca todos os produtos
- `addProduct` → adiciona produto
- `deleteProducts` → remove produto
- `getProductId` → retorna produto pelo ID
- `updateProduct` → atualiza produto existente

Fonte de dados:

- Atual: [MockAPI.io](http://MockAPI.io)
- Futuro: MongoDB

---

### 🛠️ Tecnologias

- [React](\https://react.dev/)
- [React Router v6](\https://reactrouter.com/en/main)
- [MockAPI.io](http://MockAPI.io) para persistência temporária
- [Vercel](\https://vercel.com/) para deploy

Em andamento:

- Node.js + Express + MongoDB para backend real



### 🖥️ Como rodar localmente

1. Clone o repositório

```bash
git clone https://github.com/EriclysLuckas/STOCK.git
cd STOCK/stockProducts
```

1. Instale as dependências

```bash
npm install

```

1. Rode em desenvolvimento

```bash
npm start

```

1. Acesse em
- http://localhost:3000

---
