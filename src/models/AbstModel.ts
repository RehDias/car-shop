import { Model } from 'mongoose';
import { IdRequired } from '../interfaces/IdRequired';
import { IModel } from '../interfaces/IModel';

export default abstract class AbstModel<T> implements IModel<T> {
  constructor(protected _model: Model<T>) {}

  public async create(obj: T): Promise<T & IdRequired> {
    const result = await this._model.create(obj);
    return result as T & IdRequired;
  }

  public async read(): Promise<T[]> {
    const result = await this._model.find();
    return result;
  }

  public async readOne(id: string): Promise<T | null> {
    const result = await this._model.findOne({ id });
    return result;
  }

  public async update(id: string, obj: T): Promise<T | null> {
    const result = await this._model.updateOne({ id }, { obj });
    return result as T;
  }

  public async delete(id: string): Promise<T | null> {
    const result = await this._model.deleteOne({ id });
    return result as T;
  }
}