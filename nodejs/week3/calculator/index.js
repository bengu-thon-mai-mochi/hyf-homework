const express = require("express");
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);

const Calculator = {
    add: (arrayOfNumbers) => arrayOfNumbers.reduce((a,b) => a + b),
    multiply: (arrayOfNumbers) => arrayOfNumbers.reduce((a,b) => a * b),
    substract: (arrayOfNumbers) => arrayOfNumbers.reduce((a,b) => a - b),
    divide: (arrayOfNumbers) => arrayOfNumbers.reduce((a,b) => a / b)
} 

app.post('/calculator', (req, res) => {
    const { method } = req.body;
    const calcParams = Object.values(req.query).map(param => Number(param));
    const result = Calculator[`${method}`](calcParams);
    res.send(`${result}`);
})

app.get('/calculator/:method', (req, res) => {
    const { method } = req.params;
    const calcParams = Object.values(req.query).map(param => Number(param));
    const result = Calculator[`${method}`](calcParams);
    res.send(`${result}`);
})

app.listen(app.get('port'), () => {
    console.log(`The server is running on http://localhost:${app.get('port')}.`);
})