import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { Model } from 'mongoose';
import { carMock, carMockResponse } from '../../mocks/carMock';
import { ZodError } from 'zod';
import { ErrTypes } from '../../../errors/errors';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockResponse);
    sinon.stub(carModel, 'read').resolves([carMockResponse]);
    sinon.stub(carModel, 'readOne')
    .onCall(0).resolves(carMockResponse)
    .onCall(1).resolves(null);
    sinon.stub(carModel, 'update')
    .onCall(0).resolves(carMockResponse)
    .onCall(1).resolves(null);
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

      expect(e).not.to.be.undefined;
      expect(e).to.be.instanceOf(ZodError);
    });
  });

  describe('read', () => {
    it('retorna lista de carros', async () => {
      const car = await carService.read();
      expect(car).to.be.deep.equal([carMockResponse]);
    });
  });

  describe('readOne', () => {
    it('retorna o carro correspondente ao id passado', async () => {
      const car = await carService.readOne('63237ea17dd3cab9842d046c');
      expect(car).to.be.deep.equal(carMockResponse);
    });

    it('se ocorrer um erro retorna NotFound', async () => {
      let e: any;

      try {
        await carService.readOne('63237ea17dd3cab9842d046c');
      } catch (error) {
        e = error;
      }

      expect(e).not.to.be.undefined;
      expect(e.message).to.be.equal(ErrTypes.NotFound);
    });
  });

  describe('update', () => {
    it('retorna o carro atualizadp correspondente ao id passado', async () => {
      const car = await carService.update(carMockResponse._id, carMock);
      expect(car).to.be.deep.equal(carMockResponse);
    });

    it('se id estiver incorreto retorna NotFound', async () => {
      let e: any;

      try {
        await carService.update(carMockResponse._id, carMock);
      } catch (error) {
        e = error;
      }

      expect(e).not.to.be.undefined;
      expect(e.message).to.be.equal(ErrTypes.NotFound);
    });
  });
});