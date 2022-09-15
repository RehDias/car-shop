import * as sinon from 'sinon';
import chai from 'chai';
import MotorModel from '../../../models/MotorModel';
import { Model } from 'mongoose';
import { motorMock, motorMockResponse } from '../../mocks/motorMock';
import { ErrTypes } from '../../../errors/errors';
const { expect } = chai;

describe('MotorModel', () => {
  const motorModel = new MotorModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(motorMockResponse);
    sinon.stub(Model, 'find').resolves([motorMockResponse]);
    sinon.stub(Model, 'findById').resolves(motorMockResponse);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorMockResponse);
    sinon.stub(Model, 'findByIdAndRemove').resolves(motorMockResponse);
  });

  after(()=>{
    sinon.restore();
  })

  describe('create', () => {
    it('cria a motorcycle com sucesso', async () => {
      const moto = await motorModel.create(motorMock);
      expect(moto).to.be.deep.equal(motorMockResponse);
    });
  });

  describe('read', () => {
    it('retorna uma lista de motorcycles cadastrados', async () => {
      const moto = await motorModel.read();
      expect(moto).to.be.deep.equal([motorMockResponse]);
    });
  });

  describe('readOne', () => {
    it('retorna a motorcycle correspondente ao id passado', async () => {
      const moto = await motorModel.readOne('63237ea17dd3cab9842d046c');
      expect(moto).to.be.deep.equal(motorMockResponse);
    });

    it('retorna erro caso id esteja errado', async () => {
      try {
        await motorModel.readOne('id_errado');
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrTypes.InvalidId);
      }
    });
  });

  describe('update', () => {
    it('retorna a motorcycle atualizado correspondente ao id passado', async () => {
      const moto = await motorModel.update(motorMockResponse._id, motorMock);
      expect(moto).to.be.deep.equal(motorMockResponse);
    });

    it('retorna erro caso id esteja errado', async () => {
      try {
        await motorModel.update('id_errado', motorMock);
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrTypes.InvalidId);
      }
    });
  });

  describe('update', () => {
    it('retorna qual motorcycle foi deletado', async () => {
      const moto = await motorModel.delete(motorMockResponse._id);
      expect(moto).to.be.deep.equal(motorMockResponse);
    });

    it('retorna erro caso id esteja errado', async () => {
      try {
        await motorModel.delete('id_errado');
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrTypes.InvalidId);
      }
    });
  });
});