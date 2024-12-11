// express
const express = require("express");
const app = express();
app.use(express.json())
// cors
const cors = require("cors");
app.use(cors())
// data
const routers = require('./router/processData.ts')
app.use('/apis/data', routers)

// 
const { dataClie } = require("./database/data.ts");
const data = require("./database/data.ts");

app.get('/', (_rep: any, res: any) => {
    res.json("wolcame to the apis");
});
app.get('/apis', (_rep: any, res: any) => {
    res.json(data);
});

app.get('/apis/data', (_rep: any, res: any) => {

    return res.json(dataClie)
})


const PUERTO = process.env.PORT || 3030

app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})