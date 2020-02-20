const express = require('express');
const router = express();

const reservationsJson = require(__dirname + '/../data/reservations.json');

function pickRandomItem(json) {
   count = Object.keys(json).length;
   return json[Math.floor(Math.random() * count)];
}

router.get('/reservation', (request, response) => {
   response.send(pickRandomItem(reservationsJson));
});

module.exports = router;