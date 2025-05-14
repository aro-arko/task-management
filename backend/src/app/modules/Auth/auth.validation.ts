import { z } from 'zod';

const registrationValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be a string',
        required_error: 'Name is required',
      })
      .min(1, 'Name cannot be empty'),
    email: z
      .string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
      })
      .email('Invalid email format'),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
      })
      .min(8, 'Password must be at least 8 characters long')
      .max(28, 'Password must be at most 28 characters long'),
  }),
});

export const authValidation = {
  registrationValidation,
};
