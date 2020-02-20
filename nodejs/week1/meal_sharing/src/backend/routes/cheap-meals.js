const express = require('express');
const router = express();

const mealsJson = require(__dirname + '/../data/meals.json');
const reservationsJson = require(__dirname + '/../data/reservations.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

router.get('/cheap-meals', (request, response) => {
   response.send(mealsJson);
});

module.exports = router;