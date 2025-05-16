import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { TUser } from '../User/user.interface';

export const createToken = (
  jwtPayload: Pick<TUser, 'email' | 'role'>,
  secret: string,
  expiresIn: string,
): string => {
  return jwt.sign(
    {
      email: jwtPayload.email,
      role: jwtPayload.role,
    },
    secret,
    { expiresIn } as SignOptions,
  );
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
