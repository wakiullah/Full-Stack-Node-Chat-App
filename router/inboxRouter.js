const express = require('express')
const {inboxController} = require('../controllers/inboxController')
const htmlDecorationHandler = require('../middlewares/common/htmlDecorateHandler')


const router = express.Router()

router.get('/', htmlDecorationHandler('Inbox'), inboxController)

module.exports = router