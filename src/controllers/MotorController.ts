import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

export default class MotorController {
  constructor(private _motorService: IModel<IMotorcycle>) {}

  public async create(req: Request, res: Response<IMotorcycle>) {
    const result = await this._motorService.create(req.body);
    return res.status(201).json(result);
  }

  public async read(_req: Request, res: Response<IMotorcycle[]>) {
    const result = await this._motorService.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<IMotorcycle | null>) {
    const result = await this._motorService.readOne(req.params.id);

    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<IMotorcycle | null>) {
    const result = await this._motorService.update(req.params.id, req.body);
    
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<void>) {
    await this._motorService.delete(req.params.id);

    return res.sendStatus(204);
  }
}