import express from "express";
import { getBanks, createBank, updateBank, deleteBank, showBank,
            updateMorningBank, updateAfternoonBank, updateNightBank, closeBank } from "../controllers/banks.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Bankss

router.get('/', getBanks);

router.get('/:id', showBank);

router.post('/', jsonParser, createBank);

router.put('/:id', updateBank);

router.geputt('/:id', updateMorningBank);

router.put('/:id', updateAfternoonBank);

router.put('/:id', updateNightBank);

router.put('/:id', closeBank);

router.delete('/:id', deleteBank);

export default router;