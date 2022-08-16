import express from "express";
import { getNotifications, createNotification, updateNotification, deleteNotification, showNotification } from "../controllers/Notifications.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./Notifications

router.get('/', getNotifications);

router.post('/', jsonParser, createNotification);

router.put('/:id', updateNotification);

router.delete('/:id', deleteNotification);

router.get('/:id', showNotification);

export default router;