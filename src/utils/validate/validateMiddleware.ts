import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Middleware function for validating request data
const validateMiddleware = (req: Request, res: Response, next: NextFunction): any => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export default validateMiddleware;
