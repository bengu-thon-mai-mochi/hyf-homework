-- Creat the data model.
     -- diagram is here: https://dbdiagram.io/d/5d5bff66ced98361d6ddc18c

CREATE DATABASE Meal_Sharing;
USE Meal_Sharing;

CREATE TABLE Meal (
	Id INT unsigned NOT NULL AUTO_INCREMENT,
	Title VARCHAR(255),
    Description text,
	Location VARCHAR(255),
	Reservation_time DATETIME,
	Max_Reservations INT,
	Price decimal,
	Created_Date DATE,
	PRIMARY KEY(Id)
); 

CREATE TABLE Reservation (
	Id INT unsigned NOT NULL AUTO_INCREMENT,
	Number_of_guests INT,
	Meal_Id INT unsigned,
	Created_Date DATE,
	PRIMARY KEY (id),
	CONSTRAINT fk_reservation
	FOREIGN KEY (Meal_Id)
		REFERENCES Meal(Id)
		ON UPDATE SET NULL
		ON DELETE SET NULL
); 

CREATE TABLE Review (
	Id INT unsigned NOT NULL AUTO_INCREMENT,
	Title VARCHAR(255),
	Description TEXT,
	Meal_Id INT unsigned,
	Stars INT,
	Created_Date DATE,
	PRIMARY KEY (Id),
	CONSTRAINT fk_review
	FOREIGN KEY (Meal_Id)
		REFERENCES Meal(Id)
		ON UPDATE SET NULL
		ON DELETE SET NULL
); 

-- Meal Queries :

-- Get all meals:
SELECT * FROM meal;

-- Add a new meal

INSERT INTO meal (title, description, location, reservation_time, max_reservations, price, created_date)
VALUES ('Coffee', 'Wonderful Coffee', 'Home', '2020-02-20 10:00:00', 4, 10, '2020-02-14'); 

-- Get a meal with any id, fx 1

SELECT * FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET title = 'Lets drink coffee'
WHERE id = 1; 

-- Delete a meal with any id, fx 1 

DELETE FROM meal
WHERE id = 1;

-- Reservation Quaries: 

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date)
VALUES (3, 1, '2020-02-14');

-- Get a reservation with any id, fx 1

SELECT * FROM reservation 
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE reservation
SET number_of_guests = 2
WHERE id = 1;

-- Delete a reservation with any id, fx 1

DELETE FROM reservation
WHERE id = 1;

-- Quaries for review table

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Perfect Coffee & Host', 'Host did bla bla, coffee was bla bla', 1, 5,'2020-02-22');

-- Get a review with any id, fx 1

SELECT * FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET description = 'I got poisoned afterwards, horrible experience!', stars = 1
WHERE id = 1;

-- Delete a review with any id, fx 1

DELETE FROM review
WHERE id = 1;

-- Additional queries
	-- Create records on tables: 


INSERT INTO meal (title, description, location, reservation_time, max_reservations, price, created_date)
VALUES ('BRAZILIAN FOOD AND CULTURE', 'We don´t want to just offer a well-prepared meal. We want this day to be an unforgettable night. For this, in addition to the dishes, we offer a soundtrack of Brazilian songs, we will show a documentary about Brazilian music and culture and invite all those present, before or after dinner, to go to our dance hall to burn the calories lintening to and dancing Brazilian music of the highest quality.
', 'Home', '2020-02-20 10:00:00', 5, 23, '2020-02-10');

INSERT INTO meal (title, description, location, reservation_time, max_reservations, price, created_date)
VALUES ('WOMEN & WHISKIES // LOT 579 HARVEST DINNER', 'Hi Ladies! Enjoy a welcome cocktail, five courses of signature dishes and desserts from Pacific City eateries, each paired with a whiskey tasting. 21 and Over Only', 'Pop-up Space', '2019-12-06 19:00:00', 7, 60, '2019-10-10');

INSERT INTO reservation (number_of_guests, meal_id, created_date)
VALUES (1, 4, '2020-02-10');

INSERT INTO reservation (number_of_guests, meal_id, created_date)
VALUES (1, 3, '2019-11-02');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Perfect Night', 'Ginas events are all feasts for the tastebuds and the eyes - this Winter Harvest Dinner is no exception! Each course was exciting and delicious. The decor and ambiance is warm, inviting and visually stunning. A++++ for an exceptional event!!', 4, 5,'2010-12-20');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Noommmm', 'It was a lovely night. The dinner was plenty and delicious. Apettizer, starter, dessert and coffee with memorable vanilla cookies and mojito - all with hand-made Brazilian seasoning. Paulinho is not only a great chef, but also a great host. The atmosphere is warming - great people, talk, music, in a cozy house with yard, open kitchen and dance floor. It is also well-located.', 3, 4,'2020-02-22');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Disgusting', 'Cat hair in the food.', 3, 1,'2020-02-27');


-- Get meals that has a price smaller than a specific price fx 90

SELECT * FROM meal
WHERE price < 20;

-- Get meals that still has available reservations

SELECT max_reservations, number_of_guests FROM meal
JOIN reservation ON reservation.meal_id = meal.id
WHERE max_reservations > number_of_guests;

-- Get meals that partially match a title.
	-- Rød grød med will match the meal with the title Rød grød med fløde

SELECT title FROM meal
WHERE title LIKE '%brazil%';

-- Get meals that has been created between two dates

SELECT * FROM meal
WHERE created_date BETWEEN '2019-09-10' AND '2020-01-10';

-- Get only specific number of meals fx return only 5 meals

SELECT * FROM meal
LIMIT 1;

-- Get the meals that have good reviews

SELECT * FROM meal
JOIN review ON review.meal_id = meal.id
WHERE review.stars > 4;

-- Get reservations for a specific meal sorted by created_date

SELECT * FROM reservation
JOIN meal ON meal.id = reservation.meal_id
WHERE meal.id = 2
ORDER BY reservation.created_date;


-- Sort all meals by average number of stars in the reviews

SELECT meal.title, AVG(review.stars) as average_rating FROM review
JOIN meal ON meal.id = review.meal_id
GROUP BY review.meal_id;