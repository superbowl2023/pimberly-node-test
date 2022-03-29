const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const bodyparser = require('body-parser');
const colourRoutes = require('./routes/colour-api.js')
const sizeRoutes = require('./routes/size-api.js')
let results = []

const app = express();
const PORT = 5000;

app.use(bodyparser.json());
app.use('/colour', colourRoutes)
app.use('/size', sizeRoutes)

//filter by colour api
app.get('/:colour', (req, res) => {
    
    const {colour} = req.params;
    const  productsByColor  = results.find((product) => product.Colour === colour)
    
    res.send(productsByColor)
})

//filter by size api
app.get('/:size', (req, res) => {
    
    const {size} = req.params;
    const  productsBySize  = results.find((product) => product.Size === size)
    console.log(productsBySize)
    
    res.send(req.params)

})



app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

module.exports = results