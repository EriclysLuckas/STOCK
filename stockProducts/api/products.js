// api/products.js
import fs from 'fs';
import path from 'path';
/* eslint-disable */

const dbPath = path.join(process.cwd(), '../src/Data/db.json');

const readDB = () => {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

export default async function handler(req, res) {
  const { method } = req;
  const data = readDB();

  switch (method) {
    case 'GET':
      res.status(200).json(data.products);
      break;
    case 'POST':
      const newProduct = req.body;
      data.products.push(newProduct);
      writeDB(data);
      res.status(201).json(newProduct);
      break;
    case 'DELETE':
      const { id } = req.query;
      data.products = data.products.filter(product => product.id !== id);
      writeDB(data);
      res.status(204).end();
      break;
    case 'PATCH':
      const { id: updateId } = req.query;
      const updatedProduct = req.body;
      data.products = data.products.map(product =>
        product.id === updateId ? { ...product, ...updatedProduct } : product
      );
      writeDB(data);
      res.status(200).json(updatedProduct);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PATCH']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
