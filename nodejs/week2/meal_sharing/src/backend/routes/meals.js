const express = require('express');
const router = express.Router();
const Meal = require(__dirname + '/../models/meals.js');
const Review = require(__dirname + '/../models/mealReviews.js');

router.get('/:id/', (req, res, next) => {
   const { id : idString } = req.params;
   id = Number(idString);
   const meal = Meal.getById(id);
   if(meal){
      const reviews = Review.getForMeal(meal.id);
      res.send({meal, reviews});
   } else { 
      next();
   }
})

router.get('/', (req, res, next) => {
   const { maxPrice, title, createdAfter, limit } = req.query;
   const numPrice = Number(maxPrice);
   const numLimit = Number(limit);
   if(maxPrice !== undefined) {
      res.send(Meal.getLowerPrice(numPrice));
   }
   if(title !== undefined) {
      res.send(Meal.findMealByTitle(title.toLowerCase()));
   }
   if(limit !== undefined && allMeals.length >= numLimit){
      res.send(Meal.getMax(numLimit));
   }
   if(createdAfter !== undefined){
      const queryDate = new Date(req.query.createdAfter);
      if(Meal.getCreatedAfter(queryDate).length !== 0){
         res.send(Meal.getCreatedAfter(queryDate));
      } 
   }
   if(req.url === '/'){
      res.send({
         meals: Meal.getAll(),
         reviews: meals.filter(meal => Review.getForMeal(meal.id))
      });
   } else{
      next();
   }
})

router.use((req, res, next) => res.send('404'))
module.exports = router;