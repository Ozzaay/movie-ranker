CREATE DATABASE Movierank;

CREATE TABLE accounts(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);


INSERT INTO accounts (username, password, email) VALUES ('Ossian', 'Hugo2004', 'Ossianth@gmail.com');



SELECT * FROM accounts;

DELETE FROM time WHERE user_id = 2;
DELETE FROM accounts WHERE id = 5;

SELECT * FROM accounts WHERE username = 'name' AND password = 'i dont care';

