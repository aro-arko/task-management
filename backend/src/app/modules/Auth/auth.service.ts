import AppError from '../../errors/AppError';
import { TUser } from '../User/user.interface';
import httpStatus from 'http-status';
import User from '../User/user.model';

const createUserIntoDB = async (payLoad: TUser) => {
  const userData = { ...payLoad };
  userData.role = 'user';

  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new AppError(httpStatus.CONFLICT, 'User already exists');
  }

  const newUser = await User.create(userData);
  return newUser;
};

export const authServices = {
  createUserIntoDB,
};
