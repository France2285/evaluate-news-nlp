const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='+ apiKey +'&of=json&model=udacitytest&lang=en&url=' // + formText


console.log(baseURL)

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// to be able to use fetch on from the server
const fetch = require('node-fetch');


const app = express()

/* Middleware*/
const bodyParser = require("body-parser");
const cors = require("cors");


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

app.post('/getsentiment', function(req, res){
    const formData = req.body;
    console.log('data received!');
    console.log(formData);

    //calling the api
    console.log('calling api')
    console.log(baseURL + encodeURIComponent(formData.formText))
    
    getData(baseURL + encodeURIComponent(formData.formText)) //encodeURIComponent()
    .then(function(data){
        console.log(data)
        res.send(data);
      })
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



//GET ROUTE
const getData = async (url='') =>{ 
    let allData = ''
    const request = await fetch(url);
    try {
        allData = await request.json()
    }
    catch(error) {
        console.log("error", error);
        }
    return allData;
}