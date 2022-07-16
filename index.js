import express  from "express";
import bodyParser  from "body-parser";
import cors from "cors";
import mongoose  from "mongoose";
import accounts from './routers/accounts.js';
import dishTypes from './routers/dishTypes.js';
import dishes from './routers/dishes.js';
import bills from './routers/bills.js';
import dotevn from 'dotenv';

dotevn.config();
const app = express();
const PORT = process.env.PORT || 3101;

const URI = "mongodb+srv://admin:s3bq4UOIELOJPAOA@cluster0.nffpq.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/accounts', accounts);

app.use('/dishTypes', dishTypes);

app.use('/dishes', dishes);

app.use('/bills', bills);

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
    })

