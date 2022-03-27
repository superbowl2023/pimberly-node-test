const csv = require('csv-parser');
const fs = require('fs');
const results = []
let processedResults = []
let goodRow = {}
fs.createReadStream('testfile.csv')
  .pipe(csv())
  .on('data', (data) => {
        results.push(data)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
     for(let row of results) {

            let keys = ["SKU", "Colour", "Size"]
            for(let i = 0; i< keys.length; i++) {
                
                if(row[keys[i]] === '' || row[keys[i]] === null) {
                    console.log ('row has empty')
                    break;
                }

                if (i==2) {

                
                }
            }
            //processedResults.splice(row, 1)
        }
        //processedResults.splice(row)
        console.log(processedResults);
  });