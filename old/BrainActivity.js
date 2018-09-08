const express = require('express') // not sure if needed yet

module.exports = class BrainActivity {
	constructor(req, res) {
		this.req = req
		this.res = res


		// we need to first create the muse-io server

		let receiver = new Receiver(6000, (data) => {
			// do something with the single float data
			
		})
		// now lets do the muse

		let connector = new MuseConnector(6000)

	}

	renderHTML() {
		this.res.set('Content-Type', 'text/html');
		this.res.send(new Buffer('<h2>App Loading...</h2>'));
	}
}