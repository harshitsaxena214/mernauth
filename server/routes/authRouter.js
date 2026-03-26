import express from 'express';
import { registerUser, loginUser, logoutUser, sendVerifyOtp, verifyEmail, isAuthenticated, sendResetOtp, resetPassword } from '../controllers/authController.js';
import  userAuth  from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/logout', logoutUser);
authRouter.post('/sendverifyotp', userAuth, sendVerifyOtp);
authRouter.post('/verifyaccount', userAuth, verifyEmail);
authRouter.get('/isverified', userAuth, isAuthenticated);
authRouter.post('/sendresetotp',sendResetOtp);
authRouter.post('/resetpassword', resetPassword);

export default authRouter;