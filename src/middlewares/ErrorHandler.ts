import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const ErrorHandler: ErrorRequestHandler = (e: Error | ZodError, _req, res, _next) => {
  if (e instanceof ZodError) return res.status(400).json({ message: e.issues });

  console.error(e);
  return res.status(500).json({ message: 'Aplication error' });
};

export default ErrorHandler;
