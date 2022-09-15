import { model, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import AbstModel from './AbstModel';

const carMongSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

export default class CarModel extends AbstModel<ICar> {
  constructor(_model = model('Car', carMongSchema)) {
    super(_model);
  }
}