const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/getdata', (req, res) => {
    res.send('this data has been sent by the server');
});

app.listen(5000, () => {
    console.log('server started at port 5000');
});