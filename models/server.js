const express = require ('express');
// const { Server } = require('http');
const path=require('path');

class Server {
    constructor(){
        this.app=express();
        this.port=process.env.port || 8080;
        this.middlewere();
        this.routes();
    }
    middlewere(){
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.get('/',(req,res)=>{
            res.sendFile(path.resolve('/public/'));
        })
        this.app.get('/content1.html',(req,res)=>{
            res.sendFile(path.resolve('/public/content1.html'));
        })
        this.app.get(`*`,(req,res)=>{
            rmSync.sendFile(path.resolve('/public/404.index.html'));
        })
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`http://localhost:3000`);
        })
    }
}

module.exports = Server;