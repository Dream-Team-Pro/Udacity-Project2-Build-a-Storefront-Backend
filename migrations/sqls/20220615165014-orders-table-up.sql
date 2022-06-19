/* Replace with your SQL commands */
CREATE TYPE mood AS ENUM ('active', 'complete');

CREATE TABLE orders(
    id SERIAL,
    product_id INTEGER,
    quantity INTEGER DEFAULT 1,
    user_id INTEGER,
    status mood NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);