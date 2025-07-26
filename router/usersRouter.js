const express = require('express')
const usersController = require('../controllers/userController')
const router = express.Router()

router.get('/', usersController)

module.exports = router