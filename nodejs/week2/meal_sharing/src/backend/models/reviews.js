const reviewsJson = require(__dirname + '/../data/reviews.json');

const getById =  (id) => reviewsJson.filter(item => item.id === id)[0];
const getAll = () => reviewsJson;

const Review = {
    getById,
    getAll
}

module.exports = Review;