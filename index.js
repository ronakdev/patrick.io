const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const osc = require('osc')

let oscPort = new osc.TCPSocketPort({
	url: "tcp://127.0.0.1:5002",
	metadata: true
})

oscPort.open()

oscPort.on("message", function(oscMsg) {
	console.log(oscMsg)
})

oscPort.on("error", function(error) {
	console.error(error)
})