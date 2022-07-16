import express from "express";
import { getDishes, createDish, updateDish, deleteDish, showDish } from "../controller/dishes.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Dishs

router.get('/', getDishes);

router.post('/', jsonParser, createDish);

router.put('/:id', updateDish);

router.delete('/:id', deleteDish);

router.get('/:id', showDish);

export default router;