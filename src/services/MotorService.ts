import { IModel } from '../interfaces/IModel';
import { Motor, IMotorcycle } from '../interfaces/IMotorcycle';
import { ErrTypes } from '../errors/errors';

export default class MotorService implements IModel<IMotorcycle> {
  constructor(private _motor: IModel<IMotorcycle>) { }

  public async create(obj: unknown): Promise<IMotorcycle> {
    const validated = Motor.safeParse(obj);
    if (!validated.success) throw validated.error;
    
    const result = await this._motor.create(validated.data);
    return result;
  }

  public async read(): Promise<IMotorcycle[]> {
    const result = await this._motor.read();
    return result;
  }

  public async readOne(id: string): Promise<IMotorcycle> {
    const result = await this._motor.readOne(id);
    if (!result) throw new Error(ErrTypes.NotFound);
    return result;
  }

  public async update(id: string, obj: IMotorcycle): Promise<IMotorcycle> {
    const result = await this._motor.update(id, obj);
    if (!result) throw new Error(ErrTypes.NotFound);

    return result;
  }

  public async delete(id: string): Promise<IMotorcycle | null> {
    const result = await this._motor.delete(id);
    if (!result) throw new Error(ErrTypes.NotFound);

    return result;
  }
}