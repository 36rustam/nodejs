// dotend (.env)
require ('dotenv').config();

const express = require ('express');
const app = express();
const port= process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
})
app.get('/content1',(req, res)=>{
    res.sendFile(`${__dirname}/public/content1.html`);
})
app.get('*', (req,res)=>{
    res.sendFile(`${__dirname}/404.html`)
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
