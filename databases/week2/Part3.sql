USE hyf_db_week2;


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