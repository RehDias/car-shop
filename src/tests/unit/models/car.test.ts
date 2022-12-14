import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockResponse } from '../../mocks/carMock';
import { ErrTypes } from '../../../errors/errors';
const { expect } = chai;

describe('CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockResponse);
    sinon.stub(Model, 'find').resolves([carMockResponse]);
    sinon.stub(Model, 'findById').resolves(carMockResponse);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockResponse);
    sinon.stub(Model, 'findByIdAndRemove').resolves(carMockResponse);
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

  describe('read', () => {
    it('retorna uma lista de carros cadastrados', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal([carMockResponse]);
    });
  });

  describe('readOne', () => {
    it('retorna o carro correspondente ao id passado', async () => {
      const cars = await carModel.readOne('63237ea17dd3cab9842d046c');
      expect(cars).to.be.deep.equal(carMockResponse);
    });

    it('retorna erro caso id esteja errado', async () => {
      try {
        await carModel.readOne('id_errado');
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrTypes.InvalidId);
      }
    });
  });

  describe('update', () => {
    it('retorna o carro atualizado correspondente ao id passado', async () => {
      const cars = await carModel.update(carMockResponse._id, carMock);
      expect(cars).to.be.deep.equal(carMockResponse);
    });

    it('retorna erro caso id esteja errado', async () => {
      try {
        await carModel.update('id_errado', carMock);
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrTypes.InvalidId);
      }
    });
  });

  describe('update', () => {
    it('retorna qual carro foi deletado', async () => {
      const cars = await carModel.delete(carMockResponse._id);
      expect(cars).to.be.deep.equal(carMockResponse);
    });

    it('retorna erro caso id esteja errado', async () => {
      try {
        await carModel.delete('id_errado');
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrTypes.InvalidId);
      }
    });
  });
});