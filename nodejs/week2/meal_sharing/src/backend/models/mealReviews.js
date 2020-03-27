const reviewsJson = require(__dirname + '/../data/reviews.json');

const getForMeal = (mealId) => reviewsJson.filter(mealReview => mealReview.mealId === mealId);

const Review = {
    getForMeal    
}

module.exports = Review;