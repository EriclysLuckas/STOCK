import express  from 'express';
import routes  from './routes.js';
import   './src/config/connection.js';
import cors from 'cors';

const  app =  express();
app.use(cors({ origin: '*' }));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})

