import express from "express";
import { getShedules, createShedule, updateShedule, deleteShedule, showShedule } from "../controller/shedules.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Shedules

router.get('/', getShedules);

router.post('/', jsonParser, createShedule);

router.put('/:id', updateShedule);

router.delete('/:id', deleteShedule);

router.get('/:id', showShedule);

export default router;