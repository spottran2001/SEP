import express from "express";
import { getSchedules, createSchedule, updateSchedule, deleteSchedule, showSchedule, comfirm } from "../controller/schedules.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Schedules

router.get('/', getSchedules);

router.post('/', jsonParser, createSchedule);

router.put('/:id', updateSchedule);

router.delete('/:id', deleteSchedule);

router.get('/:id', showSchedule);

router.put('/:id/comfirm', comfirm);

export default router;