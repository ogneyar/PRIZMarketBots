
const axios = require('axios')


async function sendMessage(chatId, message) {

    message = encodeURI(message)

    let url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`
    url += `?disable_web_page_preview=true`
    url += `&chat_id=${chatId}`
    url += `&text=${message}`

    let { data } = await axios.post(url)

    return data

}

module.exports = sendMessage