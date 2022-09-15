import * as sinon from 'sinon';
import chai from 'chai';
import MotorModel from '../../../models/MotorModel';
import MotorService from '../../../services/MotorService';
import { motorMock, motorMockResponse } from '../../mocks/motorMock';
import { ZodError } from 'zod';
import { ErrTypes } from '../../../errors/errors';
const { expect } = chai;

describe('Motor Service', () => {
  const motorModel = new MotorModel();
  const motorService = new MotorService(motorModel);

  before(async () => {
    sinon.stub(motorModel, 'create').resolves(motorMockResponse);
    sinon.stub(motorModel, 'read').resolves([motorMockResponse]);
    sinon.stub(motorModel, 'readOne')
    .onCall(0).resolves(motorMockResponse)
    .onCall(1).resolves(null);
    sinon.stub(motorModel, 'update')
    .onCall(0).resolves(motorMockResponse)
    .onCall(1).resolves(null);
    sinon.stub(motorModel, 'delete')
    .onCall(0).resolves(motorMockResponse)
    .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  });

  describe('create', () => {
    it('cria uma motorcycle com sucesso', async () => {
      const moto = await motorService.create(motorMock);
      expect(moto).to.be.deep.equal(motorMockResponse);
    });

    it('se ocorrer um erro retorna ZodError', async () => {
      let e: any;

      try {
        await motorService.create({});
      } catch (error) {
        e = error;
      }

      expect(e).not.to.be.undefined;
      expect(e).to.be.instanceOf(ZodError);
    });
  });

  describe('read', () => {
    it('retorna lista de motorcycles', async () => {
      const moto = await motorService.read();
      expect(moto).to.be.deep.equal([motorMockResponse]);
    });
  });

  describe('readOne', () => {
    it('retorna a motorcycle correspondente ao id passado', async () => {
      const moto = await motorService.readOne('63237ea17dd3cab9842d046c');
      expect(moto).to.be.deep.equal(motorMockResponse);
    });

    it('se ocorrer um erro retorna NotFound', async () => {
      let e: any;

      try {
        await motorService.readOne('63237ea17dd3cab9842d046c');
      } catch (error) {
        e = error;
      }

      expect(e).not.to.be.undefined;
      expect(e.message).to.be.equal(ErrTypes.NotFound);
    });
  });

  describe('update', () => {
    it('retorna a motorcycle atualizada correspondente ao id passado', async () => {
      const moto = await motorService.update(motorMockResponse._id, motorMock);
      expect(moto).to.be.deep.equal(motorMockResponse);
    });

    it('se id estiver incorreto retorna NotFound', async () => {
      let e: any;

      try {
        await motorService.update(motorMockResponse._id, motorMock);
      } catch (error) {
        e = error;
      }

      expect(e).not.to.be.undefined;
      expect(e.message).to.be.equal(ErrTypes.NotFound);
    });
  });

  describe('delete', () => {
    it('retorna qual motorcycle foi deletado', async () => {
      const moto = await motorService.delete(motorMockResponse._id);
      expect(moto).to.be.deep.equal(motorMockResponse);
    });

    it('se id estiver incorreto retorna NotFound', async () => {
      let e: any;

      try {
        await motorService.delete(motorMockResponse._id,);
      } catch (error) {
        e = error;
      }

      expect(e).not.to.be.undefined;
      expect(e.message).to.be.equal(ErrTypes.NotFound);
    });
  });
});