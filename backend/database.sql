CREATE DATABASE Movierank;

CREATE TABLE accounts(
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    year VARCHAR(255) NOT NULL,
    rating VARCHAR(255) NOT NULL,
    plot VARCHAR(255) NOT NULL
);

INSERT INTO accounts (password, email) VALUES ('Hugo2004', 'Ossianth@gmail.com');

INSERT INTO movie (Title, year, rating, plot) VALUES ('Shawshanks redemption', '1994','9.3','Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.');

SELECT * FROM accounts;

DELETE FROM time WHERE user_id = 2;
DELETE FROM accounts WHERE id = 5;

SELECT * FROM accounts WHERE username = 'name' AND password = 'i dont care';

