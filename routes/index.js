const Router = require('express')
const router = new Router()


const prizmMarketBotRouter = require('./prizmMarketBotRouter')


router.use('/prizm_market_bot', prizmMarketBotRouter)