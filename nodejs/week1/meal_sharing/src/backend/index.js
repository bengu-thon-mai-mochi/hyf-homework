//set express
const express = require('express');
const server = express();

const cheapMeals = require('./routes/cheap-meals');
const largeMeals = require('./routes/large-meals');
const meals = require('./routes/meals');
const meal = require('./routes/meal');
const reservation = require('./routes/reservation');
const reservations = require('./routes/reservations');

server.set('port', process.env.PORT || 2000);

//route 

//test route
server.get('/', (request,response) => {
    response.send('Hello World');
    });

//    

//routes 
server.get('/meal', meal);
server.get('/cheap-meals', cheapMeals);
server.get('/large-meals', largeMeals);
server.get('/meals', meals);
server.get("/reservations", reservations);
server.get('/reservation', reservation);

//error handle
server.use((request,response)=>{
        response.type('text/plain');
        response.status(505);
        response.send('Error page');
    });

//bind port   
server.listen(2000);