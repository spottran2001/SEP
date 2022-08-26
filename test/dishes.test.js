import { jest } from '@jest/globals';
import request from 'supertest'
import supertest from "supertest"
import { DishModel } from "../models/DishModel.js";

import app from "../index.js";

describe("Unit test for dishes module", () => {
    test("status 200 when create and format json", async () => {
        const response = await request(app).post('/dishes/')
                                            .send({
                                                name: "unit test",
                                                price: 25000,
                                                amount_sell: 0,
                                                recipe: "1 li sữa và 1 muỗng cacao",
                                                status: true,
                                                avatar: "https://storage.googleapis.com/realtimefirebase197pm31170.appspot.com/1660201940064.jpg",
                                                category_type: true,
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update and format json", async () => {
        const dishes = await DishModel.find({name: "unit test"});

        const id = Object.values(dishes).pop()._id;
        const response = await request(app).put('/dishes/'+ id)
                                            .send({
                                                name: "unit test",
                                                price: 23000,
                                                amount_sell: 0,
                                                recipe: "1 li sữa và 1 muỗng cacao",
                                                status: true,
                                                avatar: "https://storage.googleapis.com/realtimefirebase197pm31170.appspot.com/1660201940064.jpg",
                                                category_type: true,
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when show and format json", async () => {
        const dishes = await DishModel.find({name: "unit test"});

        const id = Object.values(dishes).pop()._id;
        const response = await request(app).get('/dishes/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update", async () => {
        const dishes = await DishModel.find({name: "unit test"});

        const id = Object.values(dishes).pop()._id;
        const response = await request(app).delete('/dishes/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
    });
});