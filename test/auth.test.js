import { jest } from '@jest/globals';
import request from 'supertest'
import supertest from "supertest"

import app from "../index.js";

describe("Unit test for Login", () => {
    test("status 200 and format json", async () => {
        const response = await request(app).post('/auth/login')
                                    .send({
                                        email: "test123@gmail.com",
                                        password: "123456Aa@"
                                    })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 403 when login with account have account_status = 2", async () => {
        const response = await request(app).post('/auth/login')
                                    .send({
                                        email: "khoa@gmail.com",
                                        password: "123456Aa@"
                                    });
        
        expect(response.statusCode).toBe(403);
    });

    test("status 403 when login with account have account_status = 3", async () => {
        const response = await request(app).post('/auth/login')
                                    .send({
                                        email: "lam@gmail.com",
                                        password: "123456Aa@"
                                    });
        
        expect(response.statusCode).toBe(403);
    });

    test("status 400 with Incorrect password", async () => {
        const response = await request(app).post('/auth/login')
                                    .send({
                                        email: "lam@gmail.com",
                                        password: "123456Aa"
                                    });
        
        expect(response.statusCode).toBe(400);
    });

    test("status 400 with Incorrect email", async () => {
        const response = await request(app).post('/auth/login')
                                    .send({
                                        email: "linh@gmail.com",
                                        password: "123456Aa@"
                                    });
        
        expect(response.statusCode).toBe(400);
    });
    
});

describe("Unit test for Logout", () => {
    test("status 200 when Logout", async () => {
        const response = await request(app).post('/auth/logout')
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        expect(response.statusCode).toBe(200);
    });
});