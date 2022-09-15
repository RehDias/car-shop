import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarController {
  constructor(private _carService: IModel<ICar>) {}

  public async create(req: Request, res: Response<ICar>) {
    const result = await this._carService.create(req.body);
    return res.status(201).json(result);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._carService.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<ICar | null>) {
    const result = await this._carService.readOne(req.params.id);

    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const result = await this._carService.update(req.params.id, req.body);
    
    return res.status(200).json(result);
  }
}