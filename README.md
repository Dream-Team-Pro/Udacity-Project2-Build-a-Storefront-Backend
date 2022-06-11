**Instructions how to test this project:**
to test this application: please click on any image on the home page to see the processing
or please write it in url: "http://localhost:3000/images?filename=fish&width=100&height=100"
after that you can change width or height manualy, then the image will resized to new params you wrote and will save in [public/images/resized] Directory

**Steps to complete this project:**
1- Initialize npm automatically select all defaults
    $ npm init -y 

2- Install type definitions for express
    $ npm install express                   // it's save to dependencies
    $ npm i --save-dev @types/express       // it's save to devDependencies

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
        "spec_dir": "build/tests",
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
      "exclude": ["node_modules", "./build", "spec"]

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









43- Install PM2 , It allows you to keep applications alive forever
    $ npm i pm2

