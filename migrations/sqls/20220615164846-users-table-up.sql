/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR (100) NOT NULL
);