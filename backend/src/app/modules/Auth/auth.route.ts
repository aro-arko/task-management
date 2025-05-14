import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authValidation } from './auth.validation';
import { authController } from './auth.controller';

const router = express.Router();

router.post(
  '/register',
  validateRequest(authValidation.registrationValidation),
  authController.createUser,
);

export const authRoutes = router;
