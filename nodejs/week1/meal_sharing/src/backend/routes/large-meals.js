const express = require('express');
const router = express();

const mealsJson = require(__dirname + '/../data/meals.json');

const largeMeals = mealsJson.filter(meal => meal.maxNumberOfGuests >= 10);

router.get('/large-meals', (request, response) => {
   response.send(largeMeals);
});

module.exports = router;