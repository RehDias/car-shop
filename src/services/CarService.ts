import { IModel } from '../interfaces/IModel';
import { Car, ICar } from '../interfaces/ICar';
import { IdRequired } from '../interfaces/IdRequired';

export default class CarService {
  constructor(private _car: IModel<ICar>) { }

  public async create(obj: unknown): Promise<ICar & IdRequired> {
    const validated = Car.safeParse(obj);
    if (!validated.success) throw validated.error;
    
    const result = await this._car.create(validated.data);
    return result;
  }
}