import dotevn from 'dotenv';
import express  from "express";
import bodyParser  from "body-parser";
import cors from "cors";
import mongoose  from "mongoose";
import accounts from './routers/accounts.js';
import dishTypes from './routers/dish_types.js';
import dishes from './routers/dishes.js';
import bills from './routers/bills.js';
import storeds from './routers/storeds.js';
import schedule from './routers/schedule.js';
import auth from './routers/auth.js';
import {verifyToken} from'./middlewares/auth.js';
import {decentralization} from'./middlewares/decentralization.js';
import upload from './routers/upload.js';
import banks from './routers/banks.js';
import statistics from './routers/statistics.js';
import notifications from './routers/notifications.js';
import workLogs from './routers/work_log.js'
import workTimes from './routers/work_times.js'

dotevn.config();
const app = express();

const PORT = process.env.PORT || 3101;

const URI = process.env.MONGO_DB;

app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));

app.use('/auth', auth);

app.use('/accounts', verifyToken, accounts);

app.use('/dishTypes', verifyToken, dishTypes);

app.use('/dishes', verifyToken, dishes);

app.use('/bills', verifyToken, bills);

app.use('/storeds', verifyToken, storeds);

app.use('/schedules', verifyToken, schedule);

app.use('/upload', verifyToken, upload);

app.use('/banks', verifyToken, banks);

app.use('/statistics', verifyToken, statistics);

app.use('/workLogs', verifyToken, workLogs);

app.use('/workTimes', verifyToken, workTimes);

app.use('/notifications', verifyToken, notifications);

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () => {
            console.log('Wellcome');
        });
    })
    .catch((err) => {
        console.log('err', err);
    });

