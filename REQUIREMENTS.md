# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index     :   `api/products/`     [GET]       // getAllProducts 
- Show      :   `api/products/:id`  [PATCH]     // getProduct
- Create    :   `api/products/`     [POST]      // addProduct
- Delete    :   `api/products/:id`  [DELETE]    // deleteProduct

#### Users
- Index [token required]
- Show (args: id)[token required]
- Create (args: User)[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

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

#### User
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
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

    /* My SQL commands */
    CREATE ENUM ('active', 'complete');

    CREATE TABLE orders(
        id SERIAL PRIMARY KEY,
        product_id INTEGER foreignkey to products table,
        quantity INTEGER DEFAULT 1,
        user_id INTEGER foreignkey to users table,  
        status enum(active, complete) NOT NULL

        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE 
    );
