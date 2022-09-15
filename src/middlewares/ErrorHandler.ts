import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { errTypes, ErrTypes } from '../errors/errors';

const ErrorHandler: ErrorRequestHandler = (e: Error | ZodError, _req, res, _next) => {
  if (e instanceof ZodError) return res.status(400).json({ message: e.issues });

  const errTypeMessage = e.message as ErrTypes;

  const otherErrors = errTypes[errTypeMessage];
  if (otherErrors) {
    return res.status(otherErrors.status).json({ error: otherErrors.message });
  }

  console.error(e);
  return res.status(500).json({ message: 'Aplication error' });
};

export default ErrorHandler;
