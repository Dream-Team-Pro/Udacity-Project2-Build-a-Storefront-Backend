**Instructions how to test this project:**
/////

**Steps to complete this project:**
1- Initialize npm automatically select all defaults
    $ npm init -y 

*- install yarn 
    $ npm i yarn
    Check installation
    yarn --version
    
2- Install type definitions for express
    $ npm install express                   // it's save to dependencies
    $ npm i --save-dev @types/express       // it's save to devDependencies

* Parse incoming request bodies in a middleware before your handlers 
    $ npm i body-parser
    
** add file called: .gitignore in root directory
    to ignore anything you don't upload in github
    
20- Add Typescript and its dependencies
    $ npm i --save-dev typescript	

21- Install ts-node
    $ npm i --save-dev ts-node

22- the type definitions of node
    $ npm i --save-dev @types/node

5- Install nodemon
    $ npm install nodemon           // it's save to dependencies
    $ npm i --save-dev nodemon      // it's save to devDependencies

6- Add a start script for nodemon in the package.json file
    "start": "nodemon src/server.ts"

7- Import express into server.ts
    import express, { Request, Response } from "express";

*- Import body parser into server.ts  then use it
    import bodyParser from "body-parser";
    app.use(bodyParser.json());

8- Create your application object with express() into server.ts
    const app = express();

9- Set a port into server.js
    const port = 3000;

12- Set your application to listen on your port 
    and output a message to the console with app.listen  into server.ts
    app.listen(port, ()=> {
      console.log(`Server Started at localhost:${port}`)
    });

13- Installed Prettier
    $ npm i --save-dev prettier
    <!-- $ npm run prettier-format -->

14- Installed ESLint
    $ npm i --save-dev eslint

//15- Installed ESLint Config Prettier
    //$ npm i --save-dev eslint-config-prettier

16- Installed ESLint Prettier Plugin
    $ npm i --save-dev eslint-plugin-prettier

17- Created scripts for both prettier and ESLint in package.json
    "lint": "eslint --fix src/**/*.ts",
    "prettier": "prettier .prettierrc src/**/*.ts --write",

18- Run prettier and ESLint to find errors  then Fixed errors
    $ npm run lint
    $ npm run prettier

23- Add the Typescript configuration
    $ npx tsc --init

24- NPX and Creating your package.json Script
    "scripts": {
        "build": "npx tsc"
    },

25- Configuring TypeScript
    tsconfig.json can also be named jsconfig.json
    To install the config file, run
    $ npx tsc --init 

26- To execute your "build" script use the following:
    $ npm run build
    $ node build/.

32- Install Unit Testing Jasmine 
    $ npm i jasmine

33- Add a reporter for outputting Jasmine results to the terminal
    $ npm i jasmine-spec-reporter     

34- Add type definitions for Jasmine
    $ npm i --save-dev @types/jasmine
    $ npm install --save-dev jasmine

>>- I also recommend to install Jasmine globally in case you need to run your tests directly
    $ npm install -g jasmine

35- Add Testing Scripts in package.json       
    "jasmine": "jasmine"

36- Set Up the File Structure:
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

37- In reporter.ts, add the following code from the jasmine-spec-reporter TypeScript support documentation
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

38- In the jasmine.json add the following configurations for a basic Jasmine configuration:
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

39- In the tsconfig.json file, add "spec" to the list of folders that we want to exclude.
      "exclude": ["node_modules", "tests", "dist", "spec"]

40- Add next code in package.json
    "test": "npx run build && npm run jasmine",

41- Run the build script and then the test script
    $ npm run jasmine
    or $ npm run test

42- Install supertest package to testing HTTP
    $ npm i supertest
    $ npm install supertest --save-dev

**- Add handle Error:
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

install environment variables
    $ npm install dotenv --save

install node-Postgres collection of Node.js for interfacing postgres database
    $ npm install pg
    $ npm i --save-dev @types/pg

use Postgres:
    $ psql -U postgres

create database:
Postgres=# create database storedev;
Postgres=# create database storetest;

define environment that i will used with database:
write that in .env        1:27:16
    PORT=5000
    MODE_ENV=dev
    DB_HOST=localhost
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=3946
    POSTGRES_DB=storedev
    POSTGRES_DBPORT=5432
    POSTGRES_DBTest=storetest 

create file in the root called: config.ts to export .eng variables
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

