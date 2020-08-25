# jwt-example

### Just the code
See `./index.js`

### Installing
- Ensure node is installed https://nodejs.org/en/download/
- `npm install`

### Running
- `npm start`

### Endpoints
- `GET /createToken/:payload` - generate a payload
- `GET /readToken/:jwt` - read a generated payload and validate the signature / expiration


# Example running on heroku
## Create a JWT:
https://uhc-jwt-example.herokuapp.com/createToken/some_payload_here

## Read a JWT
Since the token is set to expire in 30 seconds the below token will already be expired but you can use the above link to generate a new one

https://uhc-jwt-example.herokuapp.com/readToken/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoic29tZSBwYXlsb2FkIGhlcmUiLCJpYXQiOjE1OTgzNjc1MTEsImV4cCI6MTU5ODM2NzU0MX0.9-0wTWIHPo61HD26HVfZWGwQ46ifdMLqWfCcx8kP6_8

#### View the above on jwt.io
https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoic29tZSBwYXlsb2FkIGhlcmUiLCJpYXQiOjE1OTgzNjc3NzgsImV4cCI6MTU5ODM2NzgwOH0.wHBB7bHzywVOw0l16lKLwfspuxxghX2mrokr_oiMF30
