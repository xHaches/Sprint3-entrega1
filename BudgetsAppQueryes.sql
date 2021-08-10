CREATE DATABASE Presupuestos;


USE Presupuestos;

CREATE TABLE Users(
	id INT NOT NULL IDENTITY (1,1),
	email varchar (50) NOT NULL,
	password varchar(50) NOT NULL,
	status TINYINT NOT NULL DEFAULT 1,
	PRIMARY KEY (id)
);


CREATE TABLE Proyects (
	 id INT NOT NULL IDENTITY (1,1),
     version varchar (20) NOT NULL,
	 months INT NOT NULL DEFAULT 0
	 title varchar (50) NOT NULL
	 PRIMARY KEY (id)
	 );

CREATE TABLE Budgets (
	 id INT NOT NULL IDENTITY (1,1),
	 uuid varchar (50) NOT NULL UNIQUE,
	 date DATE NOT NULL,
	 id_proyect INT NOT NULL,
	 id_user INT NOT NULL,
	 PRIMARY KEY (id),
	 FOREIGN KEY (id_proyect) REFERENCES Proyects(id),
	 FOREIGN KEY (id_user) REFERENCES Users(id)
	 );


CREATE TABLE Resources (
    id int NOT NULL IDENTITY (1,1),
    title varchar (100) NOT NULL,
    monthly_cost MONEY NOT NULL,
	id_proyect INT NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (id_proyect) REFERENCES Proyects(id)
    );


CREATE TABLE Cash_Flows (
	 id int NOT NULL IDENTITY (1,1),
	 month INT NOT NULL,
	 id_proyect INT NOT NULL,
	 PRIMARY KEY (id),
	 FOREIGN KEY (id_proyect) REFERENCES Proyects(id)
	 );


CREATE TABLE Incomes (
    id int NOT NULL IDENTITY (1,1),
    concept varchar (100) NOT NULL,
	amount MONEY NOT NULL,
	id_cash_flow INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (id_cash_flow) REFERENCES Cash_Flows(id)
	);

CREATE TABLE Administrative_Expenses (
    id int NOT NULL IDENTITY (1,1),
    concept varchar (100) NOT NULL,
	amount MONEY NOT NULL,
	id_cash_flow INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (id_cash_flow) REFERENCES Cash_Flows(id)
	);

CREATE TABLE Direct_Costs (
    id int NOT NULL IDENTITY (1,1),
    concept varchar (100) NOT NULL,
	amount MONEY NOT NULL,
	id_cash_flow INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (id_cash_flow) REFERENCES Cash_Flows(id)
	);

INSERT INTO Users VALUES ('test@test.com', '123456', 1);