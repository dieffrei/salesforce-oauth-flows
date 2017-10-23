const express = require('express');
const app = express();
const crypto = require('crypto');
const settings = require("../settings.json");

app.get('/login', function (req, res) {
    res.redirect('https://login.salesforce.com/services/oauth2/authorize?' 
        + '&response_type=code'
        + '&client_id=' + settings['consumer-key']
        + '&redirect_uri=' + settings['redirect-uri']
    );
})

app.get('/oauth2/callback', function (req, res) {    
    res.send(req.query.code);
})
    
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})