var request = require('request');

var host = 'http://127.0.0.1:3000';
var login_form = {form:{username:'svmp', password: 'svmp'}};

/**
 * Simple test client
 */
request.post(host +'/login',login_form, function (error, response, body) {
    if (!error && response.statusCode === 200) {

        // If login successful test sending a post back with the proper token
        var ob = JSON.parse(body);
        console.log("Got back: ", ob);

        request({method: 'POST', url: host + '/valid', json: {authtoken: ob.authtoken}});

    } else {
        console.log("Error: ",response.statusCode, body);
    }
});