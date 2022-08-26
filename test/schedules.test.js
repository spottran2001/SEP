import { jest } from '@jest/globals';
import request from 'supertest'
import supertest from "supertest"
import { ScheduleModel } from "../models/ScheduleModel.js";

import app from "../index.js";

describe("Unit test for schedules module", () => {
    test("status 200 when create and format json", async () => {
        const response = await request(app).post('/schedules/')
                                            .send({
                                                begin_at: "2022-09-26T00:00:00.000Z",
                                                end_at: "2022-10-02T00:00:00.000Z",
                                                status: false
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update and format json", async () => {
        const schedules = await ScheduleModel.find();

        const id = Object.values(schedules).pop()._id;
        const response = await request(app).put('/schedules/'+ id)
                                            .send({
                                                morning: {
                                                    _id: "0",
                                                    shift: "Ca sáng",
                                                    days: []
                                                },
                                                afternoon: {
                                                    _id: "1",
                                                    shift: "Ca chiều",
                                                    days: []
                                                },
                                                night : {
                                                    _id: "2",
                                                    shift: "Ca tối",
                                                    days: []
                                                },
                                                begin_at: "2022-09-26T00:00:00.000Z",
                                                end_at: "2022-10-02T00:00:00.000Z",
                                                status: true
                                            })
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when show and format json", async () => {
        const schedules = await ScheduleModel.find();

        const id = Object.values(schedules).pop()._id;
        const response = await request(app).get('/schedules/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json');
    });

    test("status 200 when update", async () => {
        const schedules = await ScheduleModel.find();

        const id = Object.values(schedules).pop()._id;
        const response = await request(app).delete('/schedules/'+ id)
                                            .set({
                                                Authorization:
                                                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MmQ0MjcyYzRmZjlkODUzZTE0YjJmODUiLCJpYXQiOjE2NjEzNTM4NDl9.3WGnDPaQ_t16jYxcEsbwF1gsMp7qc9KZhFNRKngYr7Q'
                                            })
        
        expect(response.statusCode).toBe(200);
    });
});