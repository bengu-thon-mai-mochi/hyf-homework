USE hyf_db_week1;

-- Part1 : Working with tasks

-- Add a task with these attributes: 
	-- title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Pet animals','Stroking animals fur gently','2016-07-20 07:20:16','2018-10-17 02:30:15','2019-10-17 02:30:15','1','3');


-- Change the title of a task

UPDATE task
SET title = 'Pick mushrooms'
WHERE id = 36; 

-- Change a task due date

UPDATE task
SET due_date = '2018-09-17 02:30:15'
WHERE id = 36; 

-- Change a task status

UPDATE task
SET status_id = '2'
WHERE id = 36; 

-- Mark a task as complete;

SELECT task.id, status.name, status_id FROM task
JOIN status ON status_id = status.id
WHERE status.name = 'Not started';

UPDATE task
SET status_id = 3
WHERE task.id = 4;

-- Delete a task

DELETE FROM task
WHERE task.id = 38;


-- PART 3 
-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT * FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com%';

-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT * FROM task
JOIN status ON task.status_id = status.id
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name LIKE '%Donald Duck%';

-- Get all the tasks for 'Maryrose Meadows' that were created in september 
	-- (hint: month(created)=month_number)

SELECT * FROM task
JOIN status ON task.status_id = status.id
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name LIKE '%Maryrose Meadows%'
HAVING MONTH(task.created) =  9;

-- Find how many tasks where created in each month, e.g. 
	-- how many tasks were created in october,
		-- how many tasks were created in november, etc. (hint: use group by)

SELECT COUNT(id) AS Number_Of_Tasks,
MONTHNAME(created) AS Month_Name
FROM task
GROUP BY Month_Name;
