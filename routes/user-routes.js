const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');
const guard = require('../utils/guard');

router.get('/', (_req, res) => {
  res.send('Server is waiting for your request');
});

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/logout', guard, userController.logoutUser);
router.get('/current', guard, userController.getCurrentUser);

router.get('/verify/:verifytoken', userController.verifyUser);
router.post('/refresh', userController.refreshToken);

module.exports = router;
