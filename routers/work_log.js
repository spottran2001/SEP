import express from "express";
import { getWorkLog, updateWorkLog, showWorkLog, Timekeeping, showWorkLogPerAccount} from "../controllers/work_logs.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./work_logs

router.get('/', getWorkLog);

router.get('/:id', showWorkLog);

router.put('/:id', updateWorkLog);

router.post('/Timekeeping', Timekeeping);

router.post('/showWorkLogPerAccount', showWorkLogPerAccount);

export default router;