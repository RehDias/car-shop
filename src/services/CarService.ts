import { IModel } from '../interfaces/IModel';
import { Car, ICar } from '../interfaces/ICar';
import { ErrTypes } from '../errors/errors';

export default class CarService implements IModel<ICar> {
  constructor(private _car: IModel<ICar>) { }

  public async create(obj: unknown): Promise<ICar> {
    const validated = Car.safeParse(obj);
    if (!validated.success) throw validated.error;
    
    const result = await this._car.create(validated.data);
    return result;
  }

  public async read(): Promise<ICar[]> {
    const result = await this._car.read();
    return result;
  }

  public async readOne(id: string): Promise<ICar> {
    const result = await this._car.readOne(id);
    if (!result) throw new Error(ErrTypes.NotFound);
    return result;
  }

  public async update(id: string, obj: ICar): Promise<ICar> {
    const result = await this._car.update(id, obj);
    if (!result) throw new Error(ErrTypes.NotFound);

    return result;
  }

  public async delete(id: string): Promise<ICar | null> {
    const result = await this._car.delete(id);
    if (!result) throw new Error(ErrTypes.NotFound);

    return result;
  }
}