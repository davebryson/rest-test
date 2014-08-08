
# Simple REST test using JWT

## Setup

* Need Node
* npm install

## Running

* node app.js  starts server on port 3000

POST `/login` with username and password (svmp,svmp).  If successful returns JSON with an JWT token (authtoken)

POST `/valid` with json payload containing authtoken.  If valid token return 200

See simple `client.js` for an example

