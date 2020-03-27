const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

// test route 
app.get('/', (req,res) => {res.send('Hello World')})

// req.query route

app.get('/numbers/add/', (req, res) => {
    const { first , second } = req.query;
    const sum = Number(first) + Number(second);
    res.send(`${sum}`);
})

//req.params route
app.get('/numbers/multiply/:firstNumber/:secondNumber', (req, res) => {
    const firstNumber = req.params.firstNumber;
    const secondNumber = req.params.secondNumber;
    numbersMultiplied = firstNumber * secondNumber;
    res.send(`${numbersMultiplied}`)
})

app.listen(app.get('port'), () => {
    console.log(`The server is running on http://localhost:${app.get('port')}.`);
})