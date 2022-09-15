import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carMock, carMockResponse } from '../../mocks/carMock';
const { expect } = chai;

describe('car controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMockResponse);
    sinon.stub(carService, 'read').resolves([carMockResponse]);
    sinon.stub(carService, 'readOne').resolves(carMockResponse);
    sinon.stub(carService, 'update').resolves(carMockResponse);
    sinon.stub(carService, 'delete').resolves(carMockResponse);

    res.status = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  }); 

  describe('create', () => {    
    it('deve retornar status 201 e o carro criado', async () => {
      req.body = carMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockResponse)).to.be.true;
    });
  });

  describe('read', () => {
    it('deve retornar status 200 e uma lista de carros', async () => {
      await carController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMockResponse])).to.be.true;
    });
  });

  describe('readOne', () => {
    it('deve retornar status 200 e o carro correspondente ao id', async () => {
      req.params = { id: carMockResponse._id };
      await carController.readOne(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockResponse)).to.be.true;
    });
  });

  describe('update', () => {
    it('deve retornar status 200 e o carro atualizado', async () => {
      req.params = { id: carMockResponse._id };
      req.body = carMock;
      await carController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockResponse)).to.be.true;
    });
  });

  describe('delete', () => {
    it('deve retornar status 204', async () => {
      req.params = { id: carMockResponse._id };
      await carController.delete(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  });
});