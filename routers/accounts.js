import express from "express";
import { getAccounts, createAccount, updateAccount, deleteAccount, showAccount, getStaff } from "../controller/accounts.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./accounts

router.get('/', getAccounts);

router.post('/', jsonParser, createAccount);

router.put('/:id', updateAccount);

router.delete('/:id', deleteAccount);

router.get('/:id', showAccount);

router.get('/staff', getStaff);

export default router;