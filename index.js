// Replit Server Code

const wh = process.env.webhook;
const express = require("express");
const server = express();
const axios = require("axios");
const fs = require("fs");
server.use(express.json());
server.post("/",(req,res)=>{
	console.log(req.body);
	axios.post(wh,req.body).then(resp=>{
		res.sendStatus(400);
	}).catch(err=>{res.send(err)});

})
server.get("/",(req,res)=>{ res.sendStatus(401) });
server.listen(1880,()=>{});
