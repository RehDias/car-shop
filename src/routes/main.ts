import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

export default carController;