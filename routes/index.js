var express = require('express');
var router = express.Router();
var jws = require('jwt-simple');

var secret = 'helloworld';

var USER = 'svmp';
var PASSWD = 'svmp';

/**
 * Attempt to login. If valid encode a token and send back in response
 */
router.post('/login', function (req, res) {
    if (req.body.username === USER && req.body.password === PASSWD) {

        console.log("good login");

        var tokenValue = jws.encode({'sid': '1234'}, secret);

        res.json(200, {'msg': 'ok',
                authtoken: tokenValue,
                server: {host: 'svmp'}}
        );

    } else {
        res.json(401, {'msg': 'bad username/password'});
    }
});

/**
 * Check the body of a post for an authtoken and validate
 * if good: 200, otherwise 403
 */
router.post('/valid', function (req, res) {
    // Check token if good send response else 403
    try {
        var checkToken = jws.decode(req.body.authtoken, secret);
        console.log("on /valid request got token: ", checkToken);
        res.json(200, {'ok': 'good token'});
    } catch (e) {
        console.log("error: ", e);
        res.json(403, {'error': 'bad token!'});
    }
});


module.exports = router;
