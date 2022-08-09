import express from "express";
import { uploadImage } from "../controllers/upload.js";
import bodyParser  from "body-parser";
import multer from 'multer';

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
});

const router = express.Router();


var jsonParser = bodyParser.json()
// ./upload

router.post('/', Multer.single('file'), uploadImage);


export default router;