import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authServices } from './auth.service';

const createUser = catchAsync(async (req, res) => {
  const userData = { ...req.body };
  const result = await authServices.createUserIntoDB(userData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const authController = {
  createUser,
};
