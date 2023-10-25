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

INSERT INTO movies (Title, year, rating, plot) VALUES ('The Lord of the Rings: The Two Towers', '2002', '8.8', 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Saurons new ally, Saruman, and his hordes of Isengard.');

INSERT INTO movies (Title, year, rating, plot) VALUES ('The Lord of the Rings: The Return of the King', '2003', '9.0', 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.');
INSERT INTO movies (Title, year, rating, plot) VALUES ('Star Wars', '1977', '8.6', 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empires world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.');
SELECT * FROM accounts;

DELETE FROM time WHERE user_id = 2;
DELETE FROM accounts WHERE id = 5;

SELECT * FROM accounts WHERE username = 'name' AND password = 'i dont care';

