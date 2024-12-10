"use strict";
// express
const express = require("express");
const app = express();
app.use(express.json());
// cors
const cors = require("cors");
app.use(cors());
// data
const routers = require('./router/processData.js');
app.use('/apis/data', routers);
// 
const { dataClie } = require("./database/data.js");
app.get('/', (_rep, res) => {
    res.json("wolcame to the apis");
});
app.get('/apis/data', (_rep, res) => {
    return res.json(dataClie);
});
const PUERTO = process.env.PORT || 3030;
app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`);
});
