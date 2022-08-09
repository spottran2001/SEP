import express from "express";
import { login, logout } from "../controllers/auth.js";
import bodyParser  from "body-parser";
import {verifyToken} from "../middlewares/auth.js";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Billss

router.post('/login', jsonParser, login);
router.post('/logout', verifyToken, logout);


export default router;