import express from 'express';
import 'express-async-errors';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use(ErrorHandler);

export default app;
