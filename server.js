/**
 * main server backend file for handling the routing.
 */

const http = require("http");

const requests = require("request");

const express = require('express');

var app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
    res.send('Express Works!');
});

app.listen(app.get('port'),function(){
    console.log('express started on port 3000');
});
