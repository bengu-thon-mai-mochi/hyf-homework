const express = require('express');
const router = express();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

mealsJson.forEach((meal) => {
   meal.review = reviewsJson.filter(mealReview => mealReview.mealId === meal.id)[0];
})

router.get('/meals', (request, response) => {
   response.send(mealsJson);
});

module.exports = router;