//set express
const express = require('express');
const server = express();

server.use(express.json()); // Application/json

const meals = require('./routes/meals');
const reviews = require('./routes/reviews');
const reservations = require('./routes/reservations')

server.set('port', process.env.PORT || 2000);

//middleware

server.use((req, res, next) => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    console.log(`${now.toLocaleDateString(undefined, options)} request received for path: ${req.path}`);
    next();
})

//routes 
server.use('/meals', meals);
server.use('/reservations', reservations);
server.use('/reviews', reviews);


//error handle
server.use((request,response)=>{
        response.type('text/plain');
        response.status(505);
        response.send('Error page');
    });

//bind port   
server.listen(server.get('port'), () => console.log(`Server is running on port: ${server.get('port')}`));