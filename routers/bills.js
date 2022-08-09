import express from "express";
import { getBills, createBill, updateBill, deleteBill, showBill } from "../controllers/bills.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Billss

router.get('/', getBills);

router.post('/', jsonParser, createBill);

router.put('/:id', updateBill);

router.delete('/:id', deleteBill);

router.get('/:id', showBill);

export default router;