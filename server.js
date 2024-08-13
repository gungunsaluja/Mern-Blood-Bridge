const express = require("express");
// rest object
const app = express();

// routes


// 1 test route

app.use('/api/v1/test',require('./routes/testRoute'))
// port 

const PORT = 8080;
// listen
app.listen(PORT,()=>{
    console.log("Node server Running");
})