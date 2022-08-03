import express from "express";
import { login } from "../controller/auth.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Billss

router.get('/login', jsonParser, login);


export default router;