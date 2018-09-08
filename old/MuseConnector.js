module.exports = class MuseConnector {
	constructor(port) {
		var spawn = require('child_process').spawn,
		ls = spawn('muse-io', ['--osc', `osc.tcp://localhost:${port}`]);

		ls.stdout.on('data', function (data) {
			console.log('stdout: ' + data.toString());
		  	// ideally do a callback here and tell the public once its working
		  	// setTimeout(this.complete, 3000)

		});

		ls.stderr.on('data', function (data) {
		  console.log('stderr: ' + data.toString());
		});

		ls.on('exit', function (code) {
		  console.log('child process exited with code ' + code.toString());
		});
	}
}
