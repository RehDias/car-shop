import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import MotorModel from '../../../models/MotorModel';
import MotorService from '../../../services/MotorService';
import MotorController from '../../../controllers/MotorController';
import { motorMock, motorMockResponse } from '../../mocks/motorMock';
const { expect } = chai;

describe('motor controller', () => {
  const motorModel = new MotorModel();
  const motorService = new MotorService(motorModel);
  const motorController = new MotorController(motorService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(motorService, 'create').resolves(motorMockResponse);
    sinon.stub(motorService, 'read').resolves([motorMockResponse]);
    sinon.stub(motorService, 'readOne').resolves(motorMockResponse);
    sinon.stub(motorService, 'update').resolves(motorMockResponse);
    sinon.stub(motorService, 'delete').resolves(motorMockResponse);

    res.status = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  }); 

  describe('create', () => {    
    it('deve retornar status 201 e a motorcycle criada', async () => {
      req.body = motorMock;
      await motorController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorMockResponse)).to.be.true;
    });
  });

  describe('read', () => {
    it('deve retornar status 200 e uma lista de motorcycles', async () => {
      await motorController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([motorMockResponse])).to.be.true;
    });
  });

  describe('readOne', () => {
    it('deve retornar status 200 e a motorcycle correspondente ao id', async () => {
      req.params = { id: motorMockResponse._id };
      await motorController.readOne(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorMockResponse)).to.be.true;
    });
  });

  describe('update', () => {
    it('deve retornar status 200 e a motorcycle atualizado', async () => {
      req.params = { id: motorMockResponse._id };
      req.body = motorMock;
      await motorController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorMockResponse)).to.be.true;
    });
  });

  describe('delete', () => {
    it('deve retornar status 204', async () => {
      req.params = { id: motorMockResponse._id };
      await motorController.delete(req, res);
      
      expect((res.sendStatus as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  });
});