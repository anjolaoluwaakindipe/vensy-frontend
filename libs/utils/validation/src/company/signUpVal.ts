import { z } from 'zod';
import validator from 'validator';

export const SignUpVal = z
  .object({
    email: z.string().email().nonempty(),
    name: z.string().nonempty().min(3).max(255),
    address: z.string().nonempty().min(3).max(255),
    phoneNumber: z
      .string()
      .nonempty()
      .refine(
        (str: string) =>
          validator.isMobilePhone(str, 'any', { strictMode: true }),
        'Not a valid phone number'
      ),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: 'Does not match password',
    path: ['confirmPassword'],
  });

export type SignUpVal = z.infer<typeof SignUpVal>;
