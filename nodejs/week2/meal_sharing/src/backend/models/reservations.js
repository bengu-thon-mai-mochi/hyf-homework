const reservationsJson = require(__dirname + '/../data/reservations.json');

const getById = (id) => reservationsJson.filter(item => item.id === id)[0];
const getAll = () => reservationsJson;

const Reservation = {
    getById,
    getAll
}
  
module.exports = Reservation;