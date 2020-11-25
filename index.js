const axios = require('axios');

// the baseline options, can be overridden
const DEFAULT_OPTIONS = {
	timeout: 5000
};

class Server {
	constructor(ip, options) {
		if (!ip) throw 'Please provide an IP when using the FiveM class!';

		this.ip = ip;
		this.options = Object.assign(DEFAULT_OPTIONS, options);
	}

	getPlayers() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/players.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let players = body.data;
					send(players.length);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}



	getResources() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let resources = body.data.resources;
					send(resources);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

getMax() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/players.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let players = body.data;
                        axios
                                .get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let maxClients = body.data.vars.sv_maxClients;
					send(`(${maxClients}/${players.lenght})`);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}


    getOnesync() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let onesync = body.data.vars.onesync_enabled;
					send(onesync);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

    getMaxPlayers() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let maxClients = body.data.vars.sv_maxClients;
					send(maxClients);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

	getLocale() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let locale = body.data.vars.locale;
					send(locale);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

    getGamename() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let gamename = body.data.vars.gamename;
					send(gamename);
				})
				.catch(function(error) {
					err(error);
				});
		});
    }
    
    getEnhancedHostSupport() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let enhancedHostSupport = body.data.vars.sv_enhancedHostSupport;
					send(enhancedHostSupport);
				})
				.catch(function(error) {
					err(error);
				});
		});
    }
    
    getlicenseKeyToken() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let licenseKeyToken = body.data.vars.sv_licenseKeyToken;
					send(licenseKeyToken);
				})
				.catch(function(error) {
					err(error);
				});
		});
    }
    
    getScriptHookAllowed() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let scriptHookAllowed = body.data.vars.sv_scriptHookAllowed;
					send(scriptHookAllowed);
				})
				.catch(function(error) {
					err(error);
				});
		});
    }

	getTags() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let tags = body.data.vars.tags;
					send(tags);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

	getServer() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`, { timeout: this.options.timeout })
				.then(function(body) {
					let server = body.data.server;
					send(server);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}
}
const request = require("request");
const Discord = require("discord.js");
/**
 * @param {ip} server's ip.
*/
function getServerInfo(ip) {
  return new Promise(function(sendSuccess, sendError) {
    var server = {};
    request(`http://${ip}/info.json`, (error, data, body) => {
      if (error) {
        sendError(error);
        return;
      }
      server.infos = JSON.parse(body);

      request(`http://${ip}/players.json`, function(error, response, body) {
        if (error) {
          sendError(error);
          return;
        }
        server.players = JSON.parse(body);
        sendSuccess(server);
      });
    });
  });
}

function getTemplateServerStats(ip, channelID, messageID, client) {
  request(`http://${ip}/players.json`, function(error, response, body) {
   
  });
}

module.exports.getServerInfo = getServerInfo;
module.exports.Server = Server;
