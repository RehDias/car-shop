import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarController {
  constructor(private _carService: IModel<ICar>) {}

  public async create(req: Request, res: Response<ICar>) {
    const result = await this._carService.create(req.body);
    return res.status(201).json(result);
  }
}