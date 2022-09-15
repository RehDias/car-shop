import { isValidObjectId, Model } from 'mongoose';
import { ErrTypes } from '../errors/errors';
import { IModel } from '../interfaces/IModel';

export default abstract class AbstModel<T> implements IModel<T> {
  constructor(protected _model: Model<T>) {}

  public async create(obj: T): Promise<T> {
    const result = await this._model.create(obj);
    return result;
  }

  public async read(): Promise<T[]> {
    const result = await this._model.find();
    return result;
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(ErrTypes.InvalidId);    
    const result = await this._model.findById({ _id: id });
    // if (!result) throw new Error(ErrTypes.NotFound);
    return result;
  }

  public async update(id: string, obj: T): Promise<T | null> {
    const result = await this._model.findOneAndUpdate({ id }, { obj }, { new: true });
    if (!result) return null;
    return result;
  }

  public async delete(id: string): Promise<T | null> {
    const result = await this._model.findOneAndRemove({ id });
    if (!result) return null;
    return result;
  }
}