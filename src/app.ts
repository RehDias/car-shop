import express from 'express';
import 'express-async-errors';
import ErrorHandler from './middlewares/ErrorHandler';
import carRoute from './routes/CarRoute';

const app = express();

app.use(express.json());
app.use('/cars', carRoute);
app.use(ErrorHandler);

export default app;
