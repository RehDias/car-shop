import { Router } from 'express';
import { motorController } from './main';

const motorRoute = Router();

motorRoute.post('/', (req, res) => motorController.create(req, res));
motorRoute.delete('/:id', (req, res) => motorController.delete(req, res));
motorRoute.get('/:id', (req, res) => motorController.readOne(req, res));
motorRoute.put('/:id', (req, res) => motorController.update(req, res));
motorRoute.get('/', (req, res) => motorController.read(req, res));

export default motorRoute;