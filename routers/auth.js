import express from "express";
import { login, logout } from "../controllers/auth.js";
import bodyParser  from "body-parser";
import {verifyToken} from "../middlewares/auth.js";
import { createWorkLog, logoutUpdate } from "../middlewares/work_log.js";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./auth

router.post('/login', jsonParser, login, createWorkLog );
router.post('/logout', verifyToken, logoutUpdate, logout);


export default router;