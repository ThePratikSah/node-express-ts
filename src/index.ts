import express, { Express } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import TodoRoutes from './routes/todos.routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || 'v1';
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/${VERSION}`, TodoRoutes);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡, visit the URL http://localhost:${PORT}/api/${VERSION}`));
