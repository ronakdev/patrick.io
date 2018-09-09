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
		  let dataRows = string.split('\n')
		  dataRows.forEach((row) => {
		  	let array = row.split(' ').slice(4)
		  	// a1 a2 a3 a4
		  	// time
		  	let b1 = (parseInt(array[0]) + parseInt(array[2])) / 2
		  	let b2 = (parseInt(array[1]) + parseInt(array[1])) / 2
		  	if ((b1) && (b2)) {
		  		let toReturn = ["useless", b1, b2]
		  		onDataCallback(toReturn)
		  	} else {
		  		// pass
		  	}
		  	


		  	// now we have each row of 
		  	// 1536415048.86 /muse/eeg ffff 781.37 677.73 669.51 824.14
		  	// formatted strings
		  })

		});
	}
}