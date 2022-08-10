import express from "express";
import { getBills, createBill, updateBill, deleteBill, showBill, _3MonthDelete } from "../controllers/bills.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Billss

router.get('/', getBills);

router.post('/', jsonParser, createBill);

router.put('/:id', updateBill);

router.delete('/:id', deleteBill);

router.delete('/', _3MonthDelete);

router.get('/:id', showBill);

export default router;