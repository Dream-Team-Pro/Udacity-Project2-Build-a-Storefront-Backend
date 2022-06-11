import supertest from "supertest";
import app from "../server";

const request = supertest(app);

describe('Test basic endpoint server', () => {
    it('Get the / endpoint', async () => {
        const response = await request.get('/');
        console.log(response);
        expect(response.status).toBe(200);
    });
});