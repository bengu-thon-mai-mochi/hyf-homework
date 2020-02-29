const express = require('express');
const router = express.Router();
const Reservations = require(__dirname + '/../models/reservations.js');

router.get('/:id/', (req, res) => {
   const { id : idString } = req.params;
   id = Number(idString);
   res.send(Reservations.getById(id));
})

router.get('/',(req, res) => {
   res.send(Reservations.getAll());
});

module.exports = router;