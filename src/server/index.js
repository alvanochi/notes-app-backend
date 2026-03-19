import express from 'express';
import cors from 'cors';
import routes from '../services/notes/routes/index.js';
import ErrorHandler from '../middlewares/error.js'

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true,
}))
app.use(ErrorHandler);
app.use('/api', routes);


export default app;
