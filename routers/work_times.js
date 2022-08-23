import express from "express";
import { getWorkTimes, createWorkTime, updateWorkTime, deleteWorkTime, showWorkTime } from "../controllers/workTimes.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./WorkTime

router.get('/', getWorkTimes);

router.post('/', jsonParser, createWorkTime);

router.put('/:id', updateWorkTime);

router.delete('/:id', deleteWorkTime);

router.get('/:id', showWorkTime);

export default router;