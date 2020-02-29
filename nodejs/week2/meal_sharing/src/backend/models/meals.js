const mealsJson = require(__dirname + '/../data/meals.json');

const getById = (id) => mealsJson.filter(item => item.id === id)[0];
const getAll = () => mealsJson;
const getLowerPrice = (price) => mealsJson.filter(meal => meal.price < price);
const getMax = (limit) => mealsJson.slice(0, limit);
const getCreatedAfter = (query) => mealsJson.filter(meal => new Date(meal.createdAt) > query);
const findMealByTitle = (title) => mealsJson.filter(meal => !meal.title.toLowerCase().indexOf(title));

const Meal = {
  getById,
  getAll,
  getLowerPrice,
  getMax,
  getCreatedAfter,
  findMealByTitle,
}

module.exports = Meal;