import express from "express";
import { getStoreds, createStored, updateStored, deleteStored, showStored } from "../controller/Storeds.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Storeds

router.get('/', getStoreds);

router.post('/', jsonParser, createStored);

router.put('/:id', updateStored);

router.delete('/:id', deleteStored);

router.get('/:id', showStored);

export default router;