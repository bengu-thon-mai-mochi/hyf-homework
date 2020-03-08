const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (req, res) => {
  const { maxPrice, availableReservations, title, createdAfter: date, limit } = req.query;
  
  if(maxPrice){
    pool.query(`SELECT * FROM meal WHERE price < ${Number(maxPrice)}`, function(err, result, field){
      if(err){
        res.send(err)
      }
      res.json(result);
    })
  } 
  if(title){
    pool.query(`SELECT * FROM meal WHERE title LIKE '%${title}%'`, function(err, result, field){
      if(err){
        res.send(err)
      }
      res.json(result);
    })
  }
  if(date){
    pool.query(`SELECT * FROM meal WHERE Created_Date < "${date}"`, function(err, result, field){
      if(err){
        res.send(err)
      }
      res.json(result);
    })
  }
  if(limit){
    pool.query(`SELECT * FROM meal LIMIT ${limit}`, function(err, result, field){
      if(err){
        res.send(err)
      }
      res.json(result);
    })
  }
  if(availableReservations === "true"){
    pool.query(`
      SELECT meal.Id, meal.Title, meal.max_reservations, sum(reservation.Number_Of_Guests) as total 
      FROM meal JOIN reservation ON reservation.meal_id = meal.Id 
      GROUP BY meal.id 
      HAVING total < max_reservations`, function(err, result, field){
      if(err){
        res.send(err)
      }
      res.json(result);
    })
  } else { 
    pool.query("SELECT * FROM MEAL", function(err, result, field) {
      if (err) {
        res.send(err)
      } 
      res.json(result);
    })
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query(`SELECT * FROM meal WHERE Id=${id}`, function(err, result, field) {
    if (err) {
      res.send(err)
    }
    res.json(result);
  });
})

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { 
    title,
    description,
    location,
    max_reservation,
    price,
    created_date
  } = req.body;

  const data = {
    Title: title,
    Description: description,
    Location: location,
    Max_reservations: max_reservation,
    Price: price,
    Created_Date: created_date
  }

  pool.query(`UPDATE meal SET ? WHERE id = ${id}`, data, function(err, result, field) {
    if (err) {
      res.send(err)
    }
    res.json(result);
  });
})

router.post("/", (req, res) => {
  const { 
    title,
    description,
    location,
    reservation_time,
    max_reservation,
    price,
    created_date
  } = req.body;


  const data = {
    Title: title,
    Description: description,
    Location: location,
    Reservation_time: reservation_time,
    Max_reservations: max_reservation,
    Price: price,
    Created_Date: created_date
  }

  pool.query('INSERT INTO meal SET ?', data, function(err, result, field) {
    if (err) {
      res.send(err)
    }
    res.send("Query entry complete");
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  pool.query(`DELETE FROM meal WHERE id = ${id}`, function(err, result, field) {
    if (err) {
      res.send(err)
    }
    res.send('Entry delete complete');
  })
})

module.exports = router;