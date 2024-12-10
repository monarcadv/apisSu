"use strict";
const expressRouter = require('express');
const router = expressRouter.Router();
const dataclien = require('../database/data.js');
const datass = dataclien.dataClie;
router.get('/:id', (rep, res) => {
    const id = rep.params.id;
    const client = datass.find((da) => da.id === parseInt(id));
    if (!client)
        return res.status(404).json(`The client with the given ID was not found  `);
    res.json(client);
});
router.post('/', (rep, _res) => {
    const newdatas = rep.body;
    let newda = Object.assign({ id: datass.length + 1 }, newdatas);
    datass.push(newda);
});
router.put('/:id', (rep, res) => {
    const id = rep.params.id;
    const newdatas = rep.body;
    let newdaPut = Object.assign({ id: parseInt(id) }, newdatas);
    const index = datass.findIndex((da) => da.id === parseInt(id));
    if (index === -1)
        return res.status(404).json(`The client with the given ID was not found  `);
    datass[index] = newdaPut;
    res.json(datass);
});
router.delete('/:id', (rep, res) => {
    const id = rep.params.id;
    const index = datass.findIndex((da) => da.id === parseInt(id));
    if (index === -1)
        return res.status(404).json(`The client with the given ID was not found  `);
    datass.splice(index, 1);
    res.json(datass);
});
module.exports = router;
