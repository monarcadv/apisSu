const expressRouter = require('express')

const router = expressRouter.Router()
const dataclien = require('../database/data.ts')
const datass = dataclien.dataClie


router.get('/:id', (rep: any, res: any) => {
    const id = rep.params.id
    const client = datass.find((da: any) => da.id === parseInt(id))
    if (!client) return res.status(404).json(`The client with the given ID was not found  `)
    res.json(client)
})
router.post('/', (rep: any, _res: any) => {
    const newdatas = rep.body
    let newda = {
        id: datass.length + 1,
        ...newdatas
    }
    datass.push(newda)

})
router.put('/:id', (rep: any, res: any) => {
    const id = rep.params.id
    const newdatas = rep.body
    let newdaPut = {
        id: parseInt(id),
        ...newdatas
    }
    const index = datass.findIndex((da: any) => da.id === parseInt(id))
    if (index === -1) return res.status(404).json(`The client with the given ID was not found  `)
    datass[index] = newdaPut
    res.json(datass)
})

router.delete('/:id', (rep: any, res: any) => {
    const id = rep.params.id
    const index = datass.findIndex((da: any) => da.id === parseInt(id))
    if (index === -1) return res.status(404).json(`The client with the given ID was not found  `)
    datass.splice(index, 1)
    res.json(datass)
})
module.exports = router