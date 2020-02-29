const express = require('express');
const router = express();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

function pickRandomItem(json) {
   count = json.length;
   return json[Math.floor(Math.random() * count)];
}

router.get('/meal', (request, response) => {
   response.send(pickRandomItem(mealsJson));
});

module.exports = router;