const request = require('request');  
const settings = require("../settings.json");

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

request(authPost, function(err, res, body) {      
    console.log('err:' + err);
    console.log('body:' + body);
})