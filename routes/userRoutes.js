
const express = require('express');
const userRouter = express.Router();
const authController = require('../controllers/userController');

// Register a new user
userRouter.post('/register', authController.register);

// User login
userRouter.post('/login', authController.login);

module.exports = userRouter;