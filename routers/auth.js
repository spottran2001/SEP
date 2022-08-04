import express from "express";
import { login, logout } from "../controller/auth.js";
import bodyParser  from "body-parser";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Billss

router.post('/login', jsonParser, login);
router.get('/logout', verifyToken, logout);


export default router;