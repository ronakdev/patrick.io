module.exports = class Receiver {
	constructor(port, onDataCallback) {
		var spawn = require('child_process').spawn;
		var grepGetEEG  = spawn('grep', ['/muse/eeg']);
		var grepNoQuant  = spawn('grep', ['-v', 'quantization']);

		var ps = spawn('muse-player', ['-l', `${port}`]);

		ps.stdout.pipe(grepGetEEG.stdin);
		grepGetEEG.stdout.pipe(grepNoQuant.stdin)
		grepNoQuant.stdout.on('data', function(data) { 

		  let string = data.toString("utf8")
		  console.log(`STRING: ${string}`)
		  onDataCallback(string)
		  let dataRows = string.split('\n')
		  dataRows.forEach((row) => {
		  	let array = row.split(' ').slice(4)

		  	// now we have each row of 
		  	// 1536415048.86 /muse/eeg ffff 781.37 677.73 669.51 824.14
		  	// formatted strings
		  	onDataCallback(array.map((a => parseInt(a)))) // choose 0-3
		  })

		});
	}
}