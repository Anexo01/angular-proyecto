const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(require('./routes/index.routes'));
app.listen(3000);
console.log('Servidor alojado en el puerto: ',3000);