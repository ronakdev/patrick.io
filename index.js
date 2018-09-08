const express = require('express')
let app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const MuseConnector = require('./MuseConnector.js')
const Receiver = require('./Receiver.js')

app.use('/', express.static('public'))

app.get('/app', function(req, res){
	let receiver = new Receiver(6000, (data) => {
		console.log(data)
		io.emit('eeg-data', data)
	})
	let connector = new MuseConnector(6000)
  	res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//   socket.on('eeg-data', function(msg){
//   	// magically get eeg data 
//     io.emit('eeg-data', msg);
//   });
// });

http.listen(port, function(){
  console.log('listening on *:' + port);
});