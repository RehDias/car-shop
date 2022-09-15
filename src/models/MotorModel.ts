import { model, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import AbstModel from './AbstModel';

const motorMongSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: Schema.Types.Mixed,
  engineCapacity: Number,
}, { versionKey: false });

export default class MotorModel extends AbstModel<IMotorcycle> {
  constructor(_model = model('Motor', motorMongSchema)) {
    super(_model);
  }
}