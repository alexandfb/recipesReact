CREATE TABLE RECIPES (
	ID					BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	NAME 				VARCHAR(300) NOT NULL,
	SERVINGS			VARCHAR(100),
	PREPARATION_TIME 	VARCHAR(100), 
	INSTRUCTIONS	  	TEXT
);

CREATE TABLE INGREDIENTS (
	ID 			BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	RECIPE_ID 	BIGINT NOT NULL
	NAME 		VARCHAR(40),
	AMOUNT 		VARCHAR(40),
	UNIT 		VARCHAR(40),
);