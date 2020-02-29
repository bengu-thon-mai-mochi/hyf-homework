const express = require('express');
const router = express();

const mealsJson = require(__dirname + '/../data/meals.json');

const cheapMealsJson = mealsJson.filter(meal => meal.price < 100)

router.get('/cheap-meals', (request, response) => {
   response.send(cheapMealsJson);
});

module.exports = router;