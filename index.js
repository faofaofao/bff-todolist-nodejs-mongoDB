import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import router from './routes/todoRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.use('/api/todos', router)

app.get('/', (req, res)=> {
    res.send('Hello World');
    console.log('Hello World');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})