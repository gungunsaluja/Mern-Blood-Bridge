const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors'); 
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");


dotenv.config()
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


// routes




// 1 test route

app.use('/api/v1/test',require('./routes/testRoute'))
// port 

const PORT = process.env.PORT || 8080;
// listen
app.listen(PORT,()=>{
    console.log(`Node server Running in${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`.bgBlue.white);
})