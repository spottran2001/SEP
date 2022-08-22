import express from "express";
import { statistics, totalStatistics, statisticsPerMonth } from "../controllers/statistics.js";
import bodyParser  from "body-parser";


const router = express.Router();


var jsonParser = bodyParser.json()
// ./upload

router.post('/', jsonParser, statistics);

router.post('/totalStatistics', jsonParser, totalStatistics);

router.post('/totalStatistics', jsonParser, statisticsPerMonth);

export default router;