# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index     :   `api/products/`     [GET]       // getAllProducts   [token required]
- Create    :   `api/products/`     [POST]      // addProduct       [token required]
- Delete    :   `api/products/:id`  [DELETE]    // deleteProduct    [token required]
- Show      :   `api/products/:id`  [PATCH]     // getProduct       [token required]
- Update    :   `api/products/`     [PUT]       // updateProduct    [token required]

#### users
- Index     :   `api/users/`       [GET]       // getAllusers     [token required]
- Create    :   `api/users/`       [POST]      // addUser         
- Delete    :   `api/users/:id`    [DELETE]    // deleteUser      [token required]
- Show      :   `api/users/:id`    [PATCH]     // getUser         [token required]
- Update    :   `api/users/`       [PUT]       // updateUser      [token required]
- Login     :   `api/users/login`  [POST]      // loginUser      

#### Orders
- Index     :   `api/orders/`     [GET]       // getAllorders   [token required]
- Create    :   `api/orders/`     [POST]      // addPOrder       [token required]
- Delete    :   `api/orders/:id`  [DELETE]    // deletePOrder    [token required]
- Show      :   `api/orders/:id`  [PATCH]     // getPOrder       [token required]
- Update    :   `api/orders/`     [PUT]       // updatePOrder    [token required]

#### products_orders
- Index     :   `api/dailyorders/`     [GET]       // getAllProOrders   [token required]
- Create    :   `api/dailyorders/`     [POST]      // addProOrder       [token required]
- Delete    :   `api/dailyorders/:id`  [DELETE]    // deleteProOrder    [token required]
- Show      :   `api/dailyorders/:id`  [PATCH]     // getProOrder       [token required]
- Update    :   `api/dailyorders/`     [PUT]       // updateProOrder    [token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

    /* My SQL commands */
    CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price INTEGER NOT NULL,
        category VARCHAR(100)
    );

#### Users
- id
- firstName
- lastName
- password

    /* My SQL commands */
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(50) NOT NULL,
        password VARCHAR (100) NOT NULL
    );

#### Orders
- id
- user_id  rwfrences with (id) in users table
- status of order (active or complete)

    /* My SQL commands */
    CREATE TYPE mood AS ENUM ('active', 'complete');

    CREATE TABLE orders(
        id SERIAL,
        user_id INTEGER,
        status mood NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

#### Products_Orders
- id
- price
- quantity of each product in the order
- product_id referenced with (id) in products table
- order_id referenced with (id) in users table

    /* My SQL commands */
    CREATE TABLE products_orders (
        id SERIAL,
        price NUMERIC NOT NULL DEFAULT 0,
        quantity INTEGER DEFAULT 1,
        product_id INTEGER,
        order_id INTEGER,
        PRIMARY KEY (id),
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    );