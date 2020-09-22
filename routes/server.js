const express = require("express");
var router = express.Router();
const BodyParser = require("body-parser");
var app = express();
var cors = require('cors');
var axios = require('axios');
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/data', function (req, res, next) {

    const loc = req.body.lat + ',' + req.body.lon;
    console.log(loc);
    // res.status(200).send("connected");
    try {


        // axios.post(`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=${loc}&key=AIzaSyA_9vXmXuR50az31l3oJnqqU9B9j0Kh90k`
        axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${loc}&radius=50000&type=restaurant&key=AIzaSyA_9vXmXuR50az31l3oJnqqU9B9j0Kh90k`


        ).then(resp => {
            // console.log(resp.data);
            res.status(200).send(resp.data);
        });
    } catch (err) {
        console.log("error");

    }
});




module.exports = router;
