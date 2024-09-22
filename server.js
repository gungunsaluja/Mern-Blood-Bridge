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
app.use('/api/v1/auth',require('./routes/authRoutes'));
app.use('/api/v1/inventory',require('./routes/inventoryRoutes'))
app.use('/api/v1/analytics',require('./routes/analytics Routes'))
app.use('/api/v1/admin',require('./routes/AdminRoutes'))

// port 
 
const PORT = process.env.PORT || 8080;
// listen
app.listen(PORT,()=>{
    console.log(`Node server Running in${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`.bgBlue.white);
})