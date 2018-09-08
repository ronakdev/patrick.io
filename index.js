const express = require('express')
const app = express()
const BrainActivity = require('./BrainActivity.js')

app.use('/', express.static('public'))

app.get('/app', (req, res) => {
	// actual legit code 
	let view = new BrainActivity(req, res)
	view.renderHTML()
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))