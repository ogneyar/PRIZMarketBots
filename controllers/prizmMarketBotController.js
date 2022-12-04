
const sendMessage = require("../prizm_market_bot/sendMessage")


class PrizmMarketBotController {

    async webHook(req, res, next) {
        let chat_id = ""
        if (req.body && req.body.message) {
            chat_id = req.body.message.chat.id
        }
        sendMessage("Бот на ремонте " + chat_id)
        
        res.status(200).send('ok')
    }

}

module.exports = new PrizmMarketBotController()