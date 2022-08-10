import express from "express";
import { statistics } from "../controllers/statistics.js";
import bodyParser  from "body-parser";


const router = express.Router();


var jsonParser = bodyParser.json()
// ./upload

router.post('/', jsonParser, statistics);


export default router;