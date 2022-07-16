/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS products_orders (
    id SERIAL,
    price NUMERIC NOT NULL DEFAULT 0,
    quantity INTEGER DEFAULT 1,
    product_id INTEGER,
    order_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);