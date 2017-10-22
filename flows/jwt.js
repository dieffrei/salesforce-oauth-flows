var jwtflow = require('salesforce-jwt');
const settings = require("../settings.json");

var clientId = settings["consumer-key"];
var privateKey = require('fs').readFileSync('./certificates/server.key', 'utf8');

jwtflow.getToken(clientId, privateKey, settings["username"], function(err, accessToken) {
    if (err) return;
    console.log('User acess token: ' + accessToken);
});