const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const router = require('./routes/index')
const sendMessage = require('./prizm_market_bot/sendMessage')

// const http

const port = 5000

const app = express()

app.use(express.static(path.resolve(__dirname)))
app.use(favicon(path.join(__dirname,'favicon.ico')))

app.use('/api', router)

app.get('/error', (req, res) => res.status(404).sendFile(__dirname + '/404.html'))


app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))
	
app.listen(port, () => console.log(`Starting server. http://localhost:${ port }`))
