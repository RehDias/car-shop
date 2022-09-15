import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockResponse } from '../../mocks/carMock';
const { expect } = chai;

describe('CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockResponse);
  });

  after(()=>{
    sinon.restore();
  })

  describe('create', () => {
    it('cria o carro com sucesso', async () => {
      const car = await carModel.create(carMock);
      expect(car).to.be.deep.equal(carMockResponse);
    });
  });
});