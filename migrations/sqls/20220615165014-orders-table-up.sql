/* Replace with your SQL commands */
DROP TYPE IF EXISTS mood;
CREATE TYPE mood AS ENUM ('active', 'complete');

CREATE TABLE IF NOT EXISTS orders(
    id SERIAL,
    user_id INTEGER,
    status mood NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);