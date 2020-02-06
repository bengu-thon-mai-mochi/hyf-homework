USE school_database;

CREATE TABLE class (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	class_name VARCHAR(255),
    start_date DATETIME,
	end_date DATETIME,
	PRIMARY KEY (id)
); 

CREATE TABLE student (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	student_name VARCHAR(255),
	phone BIGINT,
	email VARCHAR(320),
	class_id INT unsigned,
	PRIMARY KEY (id),
	CONSTRAINT fk_class
	FOREIGN KEY (class_id)
		REFERENCES class(id)
		ON UPDATE SET NULL
		ON DELETE SET NULL
); 

INSERT INTO class (class_name, start_date, end_date)
VALUES ('Class 12','2019-10-01','2020-05-10');

CREATE INDEX index_name
ON student (student_name); 
	
ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');