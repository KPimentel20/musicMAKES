import React from 'react'
import { Search } from 'semantic-ui-react'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
  
const btt = () => (
 <div id='search'>
   <h1>Search for Songs/Artists</h1>
    <Search loading size='massive'/>
 </div>
)
export default btt

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

// If everything goes well, you’ll receive a response similar to this containing the Access Token:

// {
//    "access_token": "NgCXRKc...MzYjw",
//    "token_type": "bearer",
//    "expires_in": 3600
// }