const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const ctrl = require('./ctrl');
massive = require('massive');
require('dotenv').config();




const app = express();
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
// app.use(cors());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
});

app.get('/api/bins/:id', ctrl.getBins);
app.get('/api/bin/:id', ctrl.getBin);
app.put(`/api/update_bin/:shelf_id/:bin_id`, ctrl.updateBin)
app.delete('/api/update_bin/:shelf_id/:bin_id', ctrl.deleteBin)
app.post('/api/create/:id', ctrl.addBin)

const port = process.env.PORT || 3232;
app.listen(port, () => { console.log(`Listening on port: ${port}`) })