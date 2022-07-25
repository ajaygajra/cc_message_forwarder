const express = require('express');
const data = require('../../../data');
const messages = require('../messages');

const appId = express();

appId.use('/messages', messages);


// appId.use('/', (req, res) => {
    
//     const {appId,apiKey}=data.apiKeys[req.appId]

//     res.send({appId,apiKey});
// });



module.exports = appId;