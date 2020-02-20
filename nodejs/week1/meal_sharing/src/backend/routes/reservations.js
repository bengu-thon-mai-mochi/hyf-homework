const express = require('express');
const router = express();

const reservationsJson = require(__dirname + '/../data/reservations.json');

router.get('/reservations', (request, response) => {
   response.send(reservationsJson);
});

module.exports = router;