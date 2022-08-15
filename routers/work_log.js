import express from "express";
import { getWorkLog, updateWorkLog, showWorkLog, Timekeeping} from "../controllers/work_logs.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./work_logs

router.get('/', getWorkLog);

router.get('/', showWorkLog);

router.put('/', updateWorkLog);

router.post('/', Timekeeping);

export default router;