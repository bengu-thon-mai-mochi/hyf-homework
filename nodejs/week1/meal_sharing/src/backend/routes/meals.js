const express = require('express');
const router = express();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

mealsJson.forEach((meal) => {
   meal.reviews = [];
   reviewsJson.forEach((review) => {
      if(review.mealId === meal.id){
         meal.reviews.push(review);
      }
   })
})

router.get('/meals', (request, response) => {
   response.send(mealsJson);
});

module.exports = router;