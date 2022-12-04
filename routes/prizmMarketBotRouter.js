const Router = require('express')
const router = new Router()

const prizmMarketBotController = require('../controllers/prizmMarketBotController')
// const checkRole = require('../middleware/checkRoleMiddleware')


router.get('/', prizmMarketBotController.webHook) // 


module.exports = router