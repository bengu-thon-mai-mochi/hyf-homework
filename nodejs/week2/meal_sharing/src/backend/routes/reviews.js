const express = require('express');
const router = express.Router();
const Reviews = require(__dirname + '/../models/reviews.js')

router.get('/:id/', (req, res) => {
   const { id : idString } = req.params;
   id = Number(idString);
   res.send(Reviews.getById(intId));
})

router.get('/',(req, res) => {
   res.send(Reviews.getAll());
});

module.exports = router;