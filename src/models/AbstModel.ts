import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
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
    return result;
  }

  public async update(id: string, obj: T): Promise<T | null> {
    if (JSON.stringify(obj) === '{}') throw new Error(ErrTypes.BodyNotFound);
    if (!isValidObjectId(id)) throw Error(ErrTypes.InvalidId);  
      
    const result = await this._model.findByIdAndUpdate(
      { _id: id }, 
      { ...obj as UpdateQuery<T> },
      { new: true },
    );
    return result;
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(ErrTypes.InvalidId);  

    const result = await this._model.findByIdAndRemove({ _id: id });
    console.log(result);
    
    return result;
  }
}