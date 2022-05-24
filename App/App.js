var request = require('request');

var client_id = 'CLIENT_ID';
var client_secret = 'CLIENT_SECRET';

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {'Authorization': 'Basic' + (new Buffer(client_id + ':' + client_secret).toString('base64'))

 },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        var token = body.access_token;
        var options = {
            url: 'https://api.spotify.com/v1/users/kppimentel',
            headers: {
            'Authorization': 'Bearer' + token
        },
        json: true
    }; 
    request.get(options, function(error, response, body) {
    console.log(body);
    });
   }
});