const express = require('express')
const router = express.Router()

router.get('/:colour', (req, res) => {
    res.send("Colour filter")
    console.log("Colour filter")
    console.log(req.params)
})

router.get('/', (req, res) => {
    res.send("Size filter")
    console.log("Size filter")
    console.log(req.params)
})

