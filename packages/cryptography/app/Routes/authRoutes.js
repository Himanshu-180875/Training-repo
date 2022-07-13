const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth');
const savingLogs = require('../controllers/savingLogs');

router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/refreshToken',authController.refreshToken)
router.post('/logout', authController.logout)

module.exports = router;