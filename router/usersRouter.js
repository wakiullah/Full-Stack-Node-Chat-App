const express = require('express')
const { usersController, addNewUser } = require('../controllers/userController')
const htmlDecorationHandler = require('../middlewares/common/htmlDecorateHandler')

const { addUserValidator, addUserValidatorHandler } = require('../middlewares/users/addUserValidator')
const avatarUpload = require('../middlewares/users/avatarUpload')
const router = express.Router()

router.get('/', htmlDecorationHandler('Users'), usersController)
router.post('/', avatarUpload, addUserValidator, addUserValidatorHandler, addNewUser)

module.exports = router
