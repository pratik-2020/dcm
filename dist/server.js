'use strict';
const express =  require('express');
const mongoose = require('mongoose');
const sendMail = require('./routes/mail/sendMail');
const serverless = require('serverless-http');
const cors = require('cors')
const app = express();
app.use(cors({
    origin: '*',
    methods: [
        'GET',
        'POST'
    ]
}))
app.use(express.json());
app.post('/send', (req, res) => {
    sendMail(req, res);
})
app.listen(3001, () => {
    console.log('Listening at port 3001');
})

module.exports.handler = serverless(app);