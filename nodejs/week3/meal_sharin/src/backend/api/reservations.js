const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (req, res) => {
    pool.query("SELECT * FROM review", function(err, result, field) {
      if (err) {
        res.send(err)
      } 
      res.json(result);
  })
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    pool.query(`SELECT * FROM reservation WHERE Id=${id}`, function(err, result, field) {
      if (err) {
        res.send(err)
      }
      res.json(result);
    });
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { 
        number_of_guests,
        meal_id,
        created_date
    } = req.body;
    
    const data = {
        Number_of_guests: number_of_guests,
        Meal_Id: meal_id,
        Created_Date: created_date
    }
  
    pool.query(`UPDATE reservation SET ? WHERE id = ${id}`, data, function(err, result, field) {
      if (err) {
        res.send(err)
      }
      res.json(result);
    });
})

router.post("/", (req, res) => {
    const { 
      number_of_guests,
      meal_id,
      created_date
    } = req.body;
  
    const data = {
      Number_of_guests: number_of_guests,
      Meal_Id: meal_id,
      Created_Date: created_date
    }
  
    pool.query('INSERT INTO reservation SET ?', data, function(err, result, field) {
      if (err) {
        res.send(err)
      }
      res.send("Query entry complete");
    });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM reservation WHERE id = ${id}`, function(err, result, field) {
      if (err) {
        res.send(err)
      }
      res.send('Entry delete complete');
    })
})

module.exports = router;
