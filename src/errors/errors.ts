export enum ErrTypes {
  NotFound = 'NotFound',
  InvalidId = 'InvalidId',
}

type Message = {
  message: string,
  status: number
};

export type Errors = Record<ErrTypes, Message>;

export const errTypes: Errors = {
  NotFound: {
    message: 'Object not found',
    status: 404,
  },
  InvalidId: {
    message: 'Id must have 24 hexadecimal characters',
    status: 400,
  },
};