import { jest } from '@jest/globals';
import request from 'supertest'
import supertest from "supertest"
import { BillModel } from "../models/BillModel.js";

import app from "../index.js";

describe("Unit test for bills module", () => {
    test("status 200 when create and format json", async () => {
        const response = await request(app).post('/bills/')
                                            .send({
                                                account_id: "62d4272c4ff9d853e14b2f85",
                                                price_total: 21000,
                                                details: [
                                                    {
                                                        _id: "62e3a3e78a62ed51aa1b6c21",
                                                        name: "Cà phê sữa",
                                                        price: 21000,
                                                        amount_sell: 0,
                                                        recipe: "2/3 sữa và 1/3 cà phê",
                                                        dish_type: [
                                                            "62e52a96f3c276759195cade"
                                                        ],
                                                        status: true,
                                                        avatar: "2022-07-17 17_02_18-Window.png",
                                                        category_type: true,
                                                        createdAt: "2022-07-29T09:09:59.808Z",
                                                        updatedAt: "2022-07-30T13:16:48.762Z",
                                                        __v: 0,
                                                        amount: 1
                                                    }
                                                ],
                                                payment_type: "cash"
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update and format json", async () => {
        const bills = await BillModel.find();

        const id = Object.values(bills).pop()._id;
        const response = await request(app).put('/bills/'+ id)
                                            .send({
                                                account_id: "62d4272c4ff9d853e14b2f85",
                                                price_total: 21000,
                                                details: [
                                                    {
                                                        _id: "62e3a3e78a62ed51aa1b6c21",
                                                        name: "Cà phê sữa",
                                                        price: 21000,
                                                        amount_sell: 0,
                                                        recipe: "2/3 sữa và 1/3 cà phê",
                                                        dish_type: [
                                                            "62e52a96f3c276759195cade"
                                                        ],
                                                        status: true,
                                                        avatar: "2022-07-17 17_02_18-Window.png",
                                                        category_type: true,
                                                        createdAt: "2022-07-29T09:09:59.808Z",
                                                        updatedAt: "2022-07-30T13:16:48.762Z",
                                                        __v: 0,
                                                        amount: 1
                                                    }
                                                ],
                                                payment_type: "momo"
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when show and format json", async () => {
        const bills = await BillModel.find({email: "unittest@gmail.com"});

        const id = Object.values(bills).pop()._id;
        const response = await request(app).get('/bills/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update", async () => {
        const bills = await BillModel.find({email: "unittest@gmail.com"});

        const id = Object.values(bills).pop()._id;
        const response = await request(app).delete('/bills/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
    });
});