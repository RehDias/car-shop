import { Router } from 'express';
import carController from './main';

const carRoute = Router();

carRoute.post('/', (req, res) => carController.create(req, res));

export default carRoute;