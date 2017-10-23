const request = require('request');  
const settings = require("../settings.json");
const crypto = require("crypto");

var authPost = {  
    uri: 'https://login.salesforce.com/services/oauth2/token',
    form: {
       'grant_type': 'password',
       'client_id':  settings['consumer-key'],
       'client_secret': settings['consumer-secret'],
       'username': settings['username'],
       'password': settings['password']
    },
    method: 'POST'
}

/*
    signature—Base64-encoded HMAC-SHA256 signature signed with the consumer’s private key 
    containing the concatenated ID and issued_at. Use to verify that the identity URL hasn’t 
    changed since the server sent it.
*/
function verifySignature(body){
    body = JSON.parse(body);
    var hmac = crypto.createHmac("sha256", settings["consumer-secret"]);
    hmac.update(body.id + body.issued_at);
    console.log("Is HMAC Ok? ", hmac.digest("base64") === body.signature);
}

request(authPost, function(err, res, body) {      
    verifySignature(body);
    console.log('err:' + err);
    console.log('body:' + body);
})