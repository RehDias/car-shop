import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { Model } from 'mongoose';
import { carMock, carMockResponse } from '../../mocks/carMock';
import { ZodError } from 'zod';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockResponse);
  });

  after(()=>{
    sinon.restore();
  });

  describe('create', () => {
    it('cria um carro com sucesso', async () => {
      const car = await carService.create(carMock);
      expect(car).to.be.deep.equal(carMockResponse);
    });

    it('se ocorrer um erro retorna ZodError', async () => {
      let e: any;

      try {
        await carService.create({});
      } catch (error) {
        e = error;
      }

      expect(e).to.be.instanceOf(ZodError);
    });
  });
});