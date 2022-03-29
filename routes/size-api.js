const express = require('express')
const router = express.Router()
const csv = require('csv-parser');
const fs = require('fs');
let results = []



router.get('/:size', (req, res) => {
    let filteredArray = []

    //get the filter from request parameter

    let size = req.params
    let filter = (size.size).toUpperCase()
    //extract data from file
    try {
        fs.createReadStream('testfile.csv')
        .pipe(csv())
        .on('data', (data) => {
        results.push(data);
        JSON.stringify(results)
        })
        .on('end', ()=> {
            //console.log('this has ended')
        })
    }
    
    catch(error) {
        console.log(console.error.message)
    }
    
    for(const result of results) {
        if(result.Size === filter) {
            
            filteredArray.push(result)
        }
    }
    res.send(filteredArray)
})



module.exports = router
