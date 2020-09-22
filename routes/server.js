const express = require("express");
var router = express.Router();
const BodyParser = require("body-parser");
var app = express();
var cors = require('cors');
var axios = require('axios');
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var GOOGLE_KEY='ENTER YOUR KEY'

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/data', function (req, res, next) {

    const loc = req.body.lat + ',' + req.body.lon;

    try {


        axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${loc}&radius=50000&type=restaurant&key=${GOOGLE_KEY}`


        ).then(resp => {
         
            res.status(200).send(resp.data);
        });
    } catch (err) {
        console.log("error");

    }
});




module.exports = router;
