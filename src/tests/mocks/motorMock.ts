import { IMotorcycle } from '../../interfaces/IMotorcycle';

export const motorMockResponse: IMotorcycle & { _id: string } = {
  model: "mocked motor",
  year: 2020,
  color: "red",
  buyValue: 2900000,
  category: 'Street',
  engineCapacity: 2300,
  _id: "63237ea17dd3cab9842d046c",
}

export const motorMock: IMotorcycle = {
  model: "mocked motor",
  year: 2020,
  color: "red",
  buyValue: 2900000,
  category: 'Street',
  engineCapacity: 2300,
}