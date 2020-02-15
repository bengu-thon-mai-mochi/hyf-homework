CREATE SCHEMA Animal_Sanctuary;
USE Animal_Sanctuary;

CREATE TABLE Animal(
	Animal_Id INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(255) NOT NULL,
	PRIMARY KEY (Animal_Id)
)Engine=InnoDB;

CREATE TABLE Disease(
	Disease_Id INT NOT NULL AUTO_INCREMENT,
	Disease_Name VARCHAR(255) NOT NULL,
	Disease_Description VARCHAR(255),
	PRIMARY KEY (Disease_Id)
)Engine=InnoDB;

CREATE TABLE Caretaker(
	Caretaker_Id INT NOT NULL AUTO_INCREMENT,
	Caretaker_Name VARCHAR(255) NOT NULL,
	Contact_Info VARCHAR(255) NOT NULL,
	PRIMARY KEY (Caretaker_Id)
)Engine=InnoDB;

CREATE TABLE Caretaker_Disease(
	Id INT NOT NULL AUTO_INCREMENT,
	Caretaker_Id INT,
	Disease_Id INT,
	CONSTRAINT fk_Caretaker
	FOREIGN KEY (Caretaker_Id)
		REFERENCES Caretaker(Caretaker_Id)
		ON UPDATE SET NULL
		ON DELETE SET NULL,
	CONSTRAINT fk_Disease
	FOREIGN KEY (Disease_Id)
		REFERENCES Disease(Disease_Id)
		ON UPDATE SET NULL
		ON DELETE SET NULL,
	PRIMARY KEY (Id)
)Engine=InnoDB;

CREATE TABLE Animal_Disease(
	Id INT NOT NULL AUTO_INCREMENT,
	Animal_Id INT,
	Disease_Id INT,
	CONSTRAINT fk_Disease1 
	FOREIGN KEY (Disease_Id) 
		REFERENCES Disease(Disease_Id) 
		ON UPDATE SET NULL
		ON DELETE SET NULL,
    CONSTRAINT fk_Animal 
	FOREIGN KEY (Animal_Id) 
		REFERENCES Animal(Animal_Id) 
		ON UPDATE SET NULL
		ON DELETE SET NULL,
	PRIMARY KEY (Id)
)Engine=InnoDB;

CREATE TABLE Caretaker_Animal(
	Id INT NOT NULL AUTO_INCREMENT,
	Caretaker_Id INT,
	Animal_Id INT, 
	CONSTRAINT fk_Caretaker1 
	FOREIGN KEY (Caretaker_Id) 
		REFERENCES Caretaker(Caretaker_Id) 
		ON UPDATE SET NULL
		ON DELETE SET NULL,
    CONSTRAINT fk_Animal1 
	FOREIGN KEY (Animal_Id) 
		REFERENCES Animal(Animal_Id) 
		ON UPDATE SET NULL
		ON DELETE SET NULL,
	PRIMARY KEY (Id)
)Engine=InnoDB;