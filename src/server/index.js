const dotenv = require("dotenv");
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('../mockAPI.js')
const cors = require('cors')
var bodyParser = require('body-parser')
let application_key = process.env.API_KEY
console.log(`api key = ${application_key}`);

const app = express()
app.use(cors());
app.use(express.static('dist'))
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
  //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

let apiKey = {}
app.get('/test', function (req, res) {
  apiKey.key = application_key
  // console.log('key =', apiKey.key);
  console.log('env key =', application_key);
  res.send(apiKey);

})

