const express = require('express')
const { usersController, addNewUser } = require('../controllers/userController')
const htmlDecorationHandler = require('../middlewares/common/htmlDecorateHandler')
const avatarUpload = require('../middlewares/users/avatarUpload')
const { addUserValidator, addUserValidatorHandler } = require('../middlewares/users/addUserValidator')

const router = express.Router()

router.get('/', htmlDecorationHandler('Users'), usersController)
router.post('/', avatarUpload, addUserValidator, addUserValidatorHandler, addNewUser)

module.exports = router