const express = require('express')
const { loginController } = require('../controllers/loginController')
const htmlDecorationHandler = require('../middlewares/common/htmlDecorateHandler')

const router = express.Router()

router.get('/', htmlDecorationHandler('index'), loginController)

module.exports = router