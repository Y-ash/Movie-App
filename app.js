var express = require('express');
var app = express();

var request = require('request');

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('search');
})

app.get('/results', (req, res) => {
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=1db3120&s=' + query; 
    request( url, function(error, response, body){
    if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        res.render('results', {data: data});
    }
})
})

app.listen(3000, ()=>{
    console.log("Movie App has been started!!");
})