import { ICar } from '../../interfaces/ICar';

export const carMockResponse: ICar & { _id: string } & { __v: number } = {
  model: "mocked car",
  year: 2011,
  color: "yellow",
  buyValue: 5100000,
  doorsQty: 4,
  seatsQty: 6,
  _id: "mock_id",
  __v: 0
}

export const carMock: ICar = {
  model: "mocked car",
  year: 2011,
  color: "yellow",
  buyValue: 5100000,
  doorsQty: 4,
  seatsQty: 6,
}