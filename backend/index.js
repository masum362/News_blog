import express from 'express';
import dotenv from 'dotenv';
import router from './routes/pages.js';
import cors from 'cors';
import connection from './database/connection.js';

dotenv.config();



const app = express();
app.use(cors({origin: true, credentials: true}))
app.options('*', cors({origin: true, credentials: true}))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',router)

const port = process.env.PORT || 5002;

connection(process.env.MONGODB_URL)
app.listen(port,(req,res)=> {
    console.log(`server listening on port ${port}`);
});
