const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const port = 5000

const app = express()

app.use(express.static(path.resolve(__dirname)))
app.use(favicon(path.join(__dirname,'favicon.ico')))

app.get('/error', (req, res) => res.status(404).sendFile(__dirname + '/404.html'))

app.get('/prizm_market_bot', (req, res) => res.status(200).send('ok'))


app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))
	
app.listen(port, () => console.log(`Starting server. http://localhost:${ port }`))