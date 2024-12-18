// dotend (.env)
require ('dotenv').config();

const express = require ('express');
const app = express();
const port= process.env.PORT || 8080;

app.get('/', (req,res)=>{
    res.send('inicio');
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
