import CarController from '../controllers/CarController';
import MotorController from '../controllers/MotorController';
import CarModel from '../models/CarModel';
import MotorModel from '../models/MotorModel';
import CarService from '../services/CarService';
import MotorService from '../services/MotorService';

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

const motor = new MotorModel();
const motorService = new MotorService(motor);
export const motorController = new MotorController(motorService);

export default carController;