import express from "express";
import { getWorkTimes, createWorkTime, updateWorkTime,
     deleteWorkTime, showWorkTime, showWWorkTimePerAccount } from "../controllers/work_times.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./WorkTime

router.get('/', getWorkTimes);

router.post('/', jsonParser, createWorkTime);

router.put('/:id', updateWorkTime);

router.delete('/:id', deleteWorkTime);

router.get('/:id', showWorkTime);

router.post('/showWWorkTimePerAccount', showWWorkTimePerAccount);

export default router;