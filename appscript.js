const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const results = []
let processedResults = []
let goodRow = {}

fs.createReadStream('testfile.csv')
  .pipe(csv(["SKU", "Colour", "Size"]))
  .on('data', (data) => {
        results.push(data)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
     for(let row of results) {

            // array to keep the three keys in csv
            let keys = ["SKU", "Colour", "Size"]

            //determine empty values
            for(let i = 0; i< keys.length; i++) {
                
                if(row[keys[i]] === '' || row[keys[i]] === null) {
                    console.log ('row has empty')
                    break;
                }

                //determine if a key is duplicate before adding or removing the row
                if (i==2) {

                    if(processedResults.length > 0) {
                        for(const itemObject of processedResults) {
                            if(itemObject[keys[0]] === row[keys[0]]) {
                                processedResults.splice(itemObject, 1)
                            }
                        }
                    }
                    processedResults.push(row)
                
                }
            }
        }
        console.log(processedResults);

        
  });