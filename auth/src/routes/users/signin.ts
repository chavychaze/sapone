import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from '../../middleware/validate-request';
import { User } from '../../models/user';
import { BadRequestError } from '../../errors/bad-request-error';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must apply a password'),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    
  }
);

export { router as signinRouter };
