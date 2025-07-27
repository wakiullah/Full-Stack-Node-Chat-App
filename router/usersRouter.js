const express = require('express')
const { usersController } = require('../controllers/userController')
const htmlDecorationHandler = require('../middlewares/common/htmlDecorateHandler')
const avatarUpload = require('../middlewares/users/avatarUpload')

const router = express.Router()

router.get('/', htmlDecorationHandler('Users'), usersController)
router.post('/', avatarUpload)

module.exports = router