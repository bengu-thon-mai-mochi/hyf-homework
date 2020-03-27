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
    pool.query(`SELECT * FROM review WHERE Id=${id}`, function(err, result, field) {
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
        meal_id,
        stars,
        created_date
    } = req.body;
  
    const data = {
        Title: title,
        Description: description,
        Meal_Id: meal_id,
        Stars: stars,
        Created_Date: created_date
    }
  
    pool.query(`UPDATE review SET ? WHERE id = ${id}`, data, function(err, result, field) {
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
        meal_id,
        stars,
        created_date
    } = req.body;
  
    const data = {
        Id: id,
        Title: title,
        Description: description,
        Meal_Id: meal_id,
        Stars: stars,
        Created_Date: created_date
    }
  
    pool.query('INSERT INTO review SET ?', data, function(err, result, field) {
      if (err) {
        res.send(err)
      }
      res.send("Query entry complete");
    });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM review WHERE id = ${id}`, function(err, result, field) {
      if (err) {
        res.send(err)
      }
      res.send('Entry delete complete');
    })
})

module.exports = router;
