import { Router } from 'express';
import carController from './main';

const carRoute = Router();

carRoute.post('/', (req, res) => carController.create(req, res));
carRoute.get('/:id', (req, res) => carController.readOne(req, res));
carRoute.get('/', (req, res) => carController.read(req, res));

export default carRoute;