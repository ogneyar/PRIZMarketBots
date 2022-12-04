
const axios = require('axios')
const sendMessage = require('./sendMessage')


async function sendMessageForAdmin(message) {

    return await sendMessage(process.env.TELEGRAM_CHAT_ID_ADMIN, message)
}

module.exports = sendMessageForAdmin