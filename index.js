const express = require('express');
const bodyparser = require('body-parser');

let products = require('./routes/products-api.js')

const app = express();
const PORT = 5000;

app.use(bodyparser.json());


app.get('/', (req, res) => res.send('products to be returned'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))