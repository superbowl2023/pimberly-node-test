const express = require('express')
const router = express.Router()

router.get('users/', (req, res) => {
    res.send("api hit")
    console.log("api hit")
})

