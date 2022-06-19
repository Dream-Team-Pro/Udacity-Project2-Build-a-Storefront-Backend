import { Request, Response } from "express";
import supertest from "supertest";
import app from "../server";
import userModel from "../models/user.model";
import * as controller from "../tests/controllers/user.test.controller";


const user = new userModel();

const sql = require("../../src/tests/database/data.json"); // Including data.json
            
// Dummy user list

describe('Test basic endpoint server', () => {
    it('Get the / endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });   
});

describe('Test find user Methods', () => {   
    it('It has getAllUsers method', async () => {
        expect(user.getAllUsers).toBeDefined();
    });
    it('It has addUser method', async () => {
        expect(user.addUser).toBeDefined();
    });
    it('It has deleteUser method', async () => {
        expect(user.deleteUser).toBeDefined();
    });
    it('It has getUser method', async () => {
        expect(user.getUser).toBeDefined();
    });
    it('It has updateUser method', async () => {
        expect(user.updateUser).toBeDefined();
    });
    it('It has loginUser method', async () => {
        expect(user.loginUser).toBeDefined();
    });
});

// describe('Test {/api/users} endpoint', () => {   
//     // it('Get All users when it has authentication', async () => {
//     //     const response = await request.get('/api/users/');
//     //     expect(response.status).toBe(200);       
       
//     //     console.log('user.getAllUsers', user.getAllUsers);
        
//     //     expect(user.getAllUsers).toEqual(sql);
//     // });    

//     // it('Get user Id No. {1} when it has authentication', async () => {
//     //     const response = await request.get('/api/users/1');
//     //     expect(response.body).toEqual(
//     //         {
//     //             "message": "This is get a user from table",
//     //             "data": {
//     //               "id": 1,
//     //               "firstname": "mohamed",
//     //               "lastname": "ahmed",
//     //               "password": "$2b$10$ekBDBisvXedUWcErLjqxT.OEahqlYRv6W2/pqiRoThaONdmNDln42"
//     //             }
//     //         }
//     //     );
//     // });    

//     // it('Get user Id No. {1} when it has authentication', async () => {
//     //     const response = await request.get('/api/users/1');
//     //     expect(response.body).toEqual(
//     //         {
//     //             "message": "This is get a user from table",
//     //             "data": {
//     //               "id": 1,
//     //               "firstname": "mohamed",
//     //               "lastname": "ahmed",
//     //               "password": "$2b$10$ekBDBisvXedUWcErLjqxT.OEahqlYRv6W2/pqiRoThaONdmNDln42"
//     //             }
//     //         }
//     //     );
//     // });     
// });





// describe('Test basic endpoint server', () => {
//     it('Get the / endpoint', async () => {
//         const response = await request.get('/');
//         expect(response.status).toBe(200);
//     });   
// });



