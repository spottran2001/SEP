import { jest } from '@jest/globals';
import request from 'supertest'
import supertest from "supertest"
import { AccountModel } from "../models/AccountModel.js";

import app from "../index.js";

describe("Unit test for accounts module", () => {
    test("status 200 when create and format json", async () => {
        const response = await request(app).post('/accounts/')
                                            .send({
                                                email: "unittest@gmail.com",
                                                phone_number: "0933283112",
                                                password: "123456",
                                                address: "153 abc",
                                                account_status: 1,
                                                role: 2,
                                                full_name: "unit test",
                                                id_card: "109813123123",
                                                date_of_birth: "09/11/1999",
                                                avatar: "null"
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update and format json", async () => {
        const account = await AccountModel.find({email: "unittest@gmail.com"});

        const id = Object.values(account).pop()._id;
        const response = await request(app).put('/accounts/'+ id)
                                            .send({
                                                email: "unittest@gmail.com",
                                                phone_number: "0321312321",
                                                password: "123456",
                                                address: "153 abc",
                                                account_status: 1,
                                                role: 2,
                                                full_name: "Nguyen Trong Thang",
                                                id_card: "109813123123",
                                                date_of_birth: "09/11/1999",
                                                avatar: "null"
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when show and format json", async () => {
        const account = await AccountModel.find({email: "unittest@gmail.com"});

        const id = Object.values(account).pop()._id;
        const response = await request(app).get('/accounts/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update", async () => {
        const account = await AccountModel.find({email: "unittest@gmail.com"});

        const id = Object.values(account).pop()._id;
        const response = await request(app).delete('/accounts/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
    });
});