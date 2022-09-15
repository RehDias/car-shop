import { ICar } from '../../interfaces/ICar';

export const carMockResponse: ICar & { _id: string } = {
  model: "mocked car",
  year: 2011,
  color: "yellow",
  buyValue: 5100000,
  doorsQty: 4,
  seatsQty: 6,
  _id: "63237ea17dd3cab9842d046c",
}

export const carMock: ICar = {
  model: "mocked car",
  year: 2011,
  color: "yellow",
  buyValue: 5100000,
  doorsQty: 4,
  seatsQty: 6,
}