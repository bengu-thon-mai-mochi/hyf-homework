//set express
const express = require('express'),
    server = express();
    meals = require('./meals');
    reservations = require('./reservations');
    reviews = require('./reviews');

server.set('port', process.env.PORT || 2000);

//route 
server.get('/meals', (request,response) => {
    response.json(meals);
    });

server.get('/cheap-meals',(request,response) => {
    response.send('About page');
    });

server.get('/large-meals',(request,response) => {
    response.send('About page');
    });

server.get('/meal',(request,response) => {
        response.send('About page');
    });

server.get('/reservations',(request,response) => {
        response.send('About page');
    });

server.get('/reservation',(request,response) => {
        response.send('About page');
    });

//error handle
server.use((request,response)=>{
        response.type('text/plain');
        response.status(505);
        response.send('Error page');
    });

//bind port   
server.listen(2000);