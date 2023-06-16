import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import express from 'express';
import connectDb from './db/connectDb.js';

import products from './routes/products.js';
import user from './routes/user.js';
import { log } from 'console';
import { join } from 'path';

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


//setup
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//database
connectDb(DATABASE_URL);




// routing middleware
app.use("/", products);
app.use("/", user);


app.listen(port, () => {
    console.log(`App running in http://localhost:${port}`);
})