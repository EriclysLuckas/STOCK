# Sistema de Controle de Estoque Simples

Este é um sistema simples de controle de estoque desenvolvido com **React** para a interface de usuário e **JSON Server** como banco de dados local em formato JSON. O sistema permite realizar operações básicas como cadastrar, editar, excluir e visualizar produtos no estoque.

## Funcionalidades

- Cadastro de novos produtos no estoque.
- Edição de produtos existentes.
- Remoção de produtos do estoque.
- Exibição de todos os produtos cadastrados.
- Controle da quantidade em estoque.

## Tecnologias Usadas

- **React**: Biblioteca para a interface de usuário.
- **JSON Server**: Ferramenta para criar uma API RESTful local baseada em um arquivo JSON.
- **CSS/HTML**: Para estilização e estruturação da interface.

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

### 1. Clonando o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/EriclysLuckas/STOCK
2. Navegue para o diretório do projeto
bash
Copiar código
cd projeto-estoque
3. Instale as dependências do front-end (React)
Dentro do diretório do projeto, instale as dependências do React:

bash
Copiar código
npm install
4. Instale o JSON Server globalmente (se ainda não tiver)
O JSON Server cria uma API RESTful simples e rápida a partir de um arquivo JSON. Você pode instalá-lo globalmente usando o comando:

bash
Copiar código
npm install -g json-server
5. Inicie o servidor do JSON Server
O JSON Server vai emular um banco de dados local. Para rodá-lo, crie um arquivo chamado db.json (ou o nome de sua preferência) com a estrutura básica de dados. Exemplo de um arquivo db.json:

json
Copiar código
{
  "produtos": [
    {
      "id": 1,
      "nome": "Produto Exemplo",
      "quantidade": 100,
      "preco": 10.50
    }
  ]
}
Com o arquivo db.json criado, execute o comando para rodar o servidor do JSON Server:

bash
Copiar código
json-server --watch db.json --port 5000
Isso vai criar uma API RESTful acessível em http://localhost:5000/produtos, onde você poderá interagir com os dados.

6. Inicie o front-end (React)
Com o servidor do JSON Server rodando, em outro terminal, inicie o front-end em React:

bash
Copiar código
npm start
Isso iniciará o React no endereço http://localhost:3000, onde você poderá interagir com o sistema de controle de estoque através da interface.

Acesse a Aplicação
Abra o navegador e vá para http://localhost:3000 para ver o sistema de controle de estoque funcionando.

