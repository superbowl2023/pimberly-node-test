const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const results = []
let processedResults = []
let dupContainer = []
let goodRow = {}

duplicateCounter = 0
emptyCounter = 0

fs.createReadStream('testfile.csv')
  .pipe(csv())
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
                    emptyCounter++
                    console.log ('row skipped because has empty cell')
                    break;
                }

                //determine if a key is duplicate before adding or removing the row
                if (i==2) {

                    if(processedResults.length > 0) {
                        for(const itemObject of processedResults) {
                            if(itemObject[keys[0]] === row[keys[0]]) {
                                duplicateCounter++
                                processedResults.splice(itemObject, 1) // remove duplicate from proccessed results
                                dupContainer.push(itemObject)
                                console.log ('row skipped because duplicated') 
                            }
    
                        }
                    }
                    processedResults.push(row)
                
                }
            }
        }

        // fix bug where the second copy of duplicate object was still found into processed results
        for(const dupObject of dupContainer) {
            processedResults.splice(dupObject, 1)
        }
        console.log(processedResults);

        
  });