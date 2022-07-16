**Udacity-Project2-Build-a-Storefront-Backend**

**Instructions how to test this project:**
```SQL
CREATE DATABASE storedev;
CREATE DATABASE storetest;
````
when you want to test this project in Authentication Please put this Token in bearer auth:
``
Bearer Token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko
``

**add dummy data in storedev datatbase like:**
you can put these dummy datas by using application statements in routes I mentioned it to use this project in the following statements:

**this project has two .env environments called:**
.env.dev:    used in development environment
.env.test:   used in test environment


***add theses info in .env file in root of project like:***
````
PORT=5000
MODE_ENV=dev
DB_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=3946
POSTGRES_DB=storedev
POSTGRES_DBPORT=5432
POSTGRES_DBTest=storetest
SALT_ROUNDS=10
PEPPER=pepper
TOKEN_SECRET=MohSecretKey
TOKEN_HEADER_KEY=tokenheaderkey
````


***add dummy data in users Table like:***
````
[
    {
        "id": 1,
        "firstname": "mohamed",
        "lastname": "salah",
        "password": 12345
    },    
    {
        "id": 2,
        "firstname": "badr",
        "lastname": "mohamed",
        "password": 1234
    },
    {
        "id": 3,
        "firstname": "talia",
        "lastname": "mohamed",
        "password": 123
    }
]

````
````

***add dummy data in products Table like:***
[
    {
        "id": 1,
        "name": "CD",
        "price": 10,
        "category": "accessories"
    },    
    {
        "id": 2,
        "name": "DVD",
        "price": 20,
        "category": "accessories"
    },
    {
        "id": 3,
        "name": "Iphone13",
        "price": 500,
        "category": "electronics"
    }
]

````
````
***add dummy data in orders Table like:***
[
    {
        "id": 1,
        "quantity": 50,
        "user_id": 1,
        "status": "active"
    },    
    {
        "id": 2,
        "quantity": 30,
        "user_id": 2,
        "status": "active"
    },
    {
        "id": 3,
        "quantity": 20,
        "user_id": 3,
        "status": "complete"
    }
]

````
````
***add dummy data in products_orders Table like:***
[
    {
        "id": 1,
        "price": 60,
        "product_id": 1,
        "order_id": 2
    },    
    {
        "id": 2,
        "price": 5000,
        "product_id": 3,
        "order_id": 3
    }
]

````

routes to use this project:
(1) USERS TABLE:
``
GET:    [http://localhost:5000/api/users/]      =>  fetch all Users
POST:   [http://localhost:5000/api/users/]      =>  create a new User
DELETE: [http://localhost:5000/api/users/:id]   =>  delete a User
PATCH:  [http://localhost:5000/api/users/:id]   =>  fetch a single User by its ID
PUT:    [http://localhost:5000/api/users/]      =>  update an existing User
POST:   [http://localhost:5000/api/users/login] =>  login an existing User

``
(2) PRODUCTS TABLE:
``
GET:    [http://localhost:5000/api/products/]      =>  fetch all products
POST:   [http://localhost:5000/api/products/]      =>  create a new product
DELETE: [http://localhost:5000/api/products/:id]   =>  delete a product
PATCH:  [http://localhost:5000/api/products/:id]   =>  fetch a single product by its ID
PUT:    [http://localhost:5000/api/products/]      =>  update an existing product

``
(3) ORDERS TABLE:
``
GET:    [http://localhost:5000/api/orders/]      =>  fetch all orders
POST:   [http://localhost:5000/api/orders/]      =>  create a new order
DELETE: [http://localhost:5000/api/orders/:id]   =>  delete an order
PATCH:  [http://localhost:5000/api/orders/:id]   =>  fetch a single order by its ID
PUT:    [http://localhost:5000/api/orders/]      =>  update an existing order

``
(3) Daily orders in products_orders TABLE:
``
GET:    [http://localhost:5000/api/dailyorders/]      =>  fetch all dailyorders
POST:   [http://localhost:5000/api/dailyorders/]      =>  create a new order
DELETE: [http://localhost:5000/api/dailyorders/:id]   =>  delete an daily order
PATCH:  [http://localhost:5000/api/dailyorders/:id]   =>  fetch a single order by its ID
PUT:    [http://localhost:5000/api/dailyorders/]      =>  update an existing order

``

**Steps to complete this project:**
#### Initialize npm automatically select all defaults
    $ npm init -y 

#### install yarn 
    $ npm i yarn
    Check installation
    yarn --version

#### Install body parser:
    $ npm i --save-dev @types/body-parser
    $ npm i body-parser

#### Install Sequelize 
    $ npm install --save sequelize

#### Install type definitions for express
    $ npm install express                   // it's save to dependencies
    $ npm i --save-dev @types/express       // it's save to devDependencies

#### add file called: .gitignore in root directory
     to ignore anything you don't upload in github
    
#### Add Typescript and its dependencies
    $ npm i --save-dev typescript	

#### Install ts-node
    $ npm i --save-dev ts-node

#### the type definitions of node
    $ npm i --save-dev @types/node

#### Install nodemon
    $ npm install nodemon           // it's save to dependencies
    $ npm i --save-dev nodemon      // it's save to devDependencies

#### Add a start script for nodemon in the package.json file
    "start": "nodemon src/server.ts"

#### Import express into server.ts
    import express, { Request, Response } from "express";

#### Create your application object with express() into server.ts
    const app = express();

#### Set a port into server.js
    const port = 5000;

#### Set your application to listen on your port 
    and output a message to the console with app.listen  into server.ts
    app.listen(port, ()=> {
      console.log(`Server Started at localhost:${port}`)
    });

#### Installed Prettier
    $ npm i --save-dev prettier
    <!-- $ npm run prettier-format -->

#### Installed ESLint
    $ npm i --save-dev eslint
    $ npm install --save-dev @typescript-eslint/parser 
    
#### Installed ESLint Config Prettier
    //$ npm i --save-dev eslint-config-prettier

#### Installed ESLint Prettier Plugin
    $ npm i --save-dev eslint-plugin-prettier

#### Created scripts for both prettier and ESLint in package.json
    "lint": "eslint --fix src/**/*.ts",
    "prettier": "prettier .prettierrc src/**/*.ts --write",

#### Run prettier and ESLint to find errors  then Fixed errors
    $ npm run lint
    $ npm run prettier

#### Add the Typescript configuration
    $ npx tsc --init

#### NPX and Creating your package.json Script
    "scripts": {
        "build": "npx tsc"
    },

#### Configuring TypeScript
    tsconfig.json can also be named jsconfig.json
    To install the config file, run
    $ npx tsc --init 

#### To execute your "build" script use the following:
    $ npm run build
    $ node build/.

#### Install Unit Testing Jasmine 
    $ npm i jasmine

33- Add a reporter for outputting Jasmine results to the terminal
    $ npm i jasmine-spec-reporter     

#### Add type definitions for Jasmine
    $ npm i --save-dev @types/jasmine
    $ npm install --save-dev jasmine

#### I also recommend to install Jasmine globally in case you need to run your tests directly
    $ npm install -g jasmine

#### Add Testing Scripts in package.json       
    "jasmine": "jasmine"

#### Set Up the File Structure:
    - In the root directory of the project, create a folder named spec.
    - In the spec folder, create a folder named support.
    - In the support folder, create a file named jasmine.json to hold the primary configurations for Jasmine.
    - In the src folder, add a folder named tests.
    - In tests add a file named indexSpec.ts to hold the tests for code in the server.js file.
    - In the tests folder, add another folder named helpers.
    - In helpers, add a file named reporter.ts. This will be the primary configuration for your spec reporter.

    File Structure
    ├── node_modules
    ├── spec
    │      └── support
    │           └── jasmine.json
    ├── src
    │     ├──  tests
    │     │     ├── helpers
    │     │     │      └── reporter.ts
    │     │     └── indexSpec.ts
    │     └── server.ts
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json

#### In reporter.ts, add the following code from the jasmine-spec-reporter TypeScript support documentation
    import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
    import SuiteInfo = jasmine.SuiteInfo;

    class CustomProcessor extends DisplayProcessor {
        public displayJasmineStarted(info: SuiteInfo, log: string): string {
            return `${log}`;
        }
    }

    jasmine.getEnv().clearReporters();
    jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
            displayStacktrace: StacktraceOption.NONE
        },
        customProcessors: [CustomProcessor],
    }));    

#### In the jasmine.json add the following configurations for a basic Jasmine configuration:
    {
        "spec_dir": "dist/tests",
        "spec_files": [
            "**/*[sS]pec.js"
        ],
        "helpers": [
            "helpers/**/*.js"
        ],
        "stopSpecOnExpectationFailure": false,
        "random": false
    }

#### In the tsconfig.json file, add "spec" to the list of folders that we want to exclude.
      "exclude": ["node_modules", "tests", "dist", "spec"]

#### Add next code in package.json
    "test": "npx run build && npm run jasmine",

#### Run the build script and then the test script
    $ npm run jasmine
    or $ npm run test

#### Install supertest package to testing HTTP
    $ npm i supertest
    $ npm install supertest --save-dev

#### Add handle Error:
    create new folder in src/ called: middleware
    add file named: error.middleware.ts
    write this code:
    import { Response, Request, NextFunction } from "express";
    import errorInterface from "../interfaces/error.interface";

    const errorMiddleware = (
    error: errorInterface,
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    const status = error.status || 500;
    const message = error.message || 'oops, something wrong';
    res.status(status).json({ status, message });
    };

    export default errorMiddleware;

    create new folder in src/ called: interfaces
    add file named: error.interface.ts
    write this code:
    interface errorInterface {
        name? : string,
        stack? : string,
        message? : string,
        status? : number
    }

    export default errorInterface;

    then add next code in src/server.ts
    app.use(errorMiddleware);

#### install environment variables
    $ npm install dotenv --save

#### install node-Postgres collection of Node.js for interfacing postgres database
    $ npm install pg
    $ npm i --save-dev @types/pg

#### use Postgres:
    $ psql -U postgres

#### create database:
    Postgres=# create database storedev;
    Postgres=# create database storetest;

#### define environment that i will used with database:
    write that in .env
    PORT=5000
    MODE_ENV=dev
    DB_HOST=localhost
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=3946
    POSTGRES_DB=storedev
    POSTGRES_DBPORT=5432
    POSTGRES_DBTest=storetest 

#### create file in the root called: config.ts to export .eng variables
    write that in config.ts:
    import dotenv from "dotenv";
    // Register
    dotenv.config();

    const {
        PORT,
        MODE_ENV,
        DB_HOST,
        POSTGRES_USER,
        POSTGRES_PASSWORD,
        POSTGRES_DB,
        POSTGRES_DBTest,
        POSTGRES_DBPORT
    } = process.env;

    export default {
        port: PORT,
        host: DB_HOST,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: MODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DBTest,
        dbPort: Number(POSTGRES_DBPORT),
    };





























43- Install PM2 , It allows you to keep applications alive forever
    $ npm i pm2

