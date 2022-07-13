import express  from "express";
import bodyParser  from "body-parser";
import cors from "cors";
import mongoose  from "mongoose";
import accounts from './routers/accounts.js';
import dotenv from 'dotenv';
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.HOST || 3101;

const URI = process.env.DB_URL;

app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/accounts', accounts);

console.log(process.env.PORT);
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () => {
            console.log('sever on port ${PORT}');
        });
    })
    .catch((err) => {
        console.log('err', err);
    })

