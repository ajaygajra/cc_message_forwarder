const express = require('express')
const messageId = express();

messageId.get("/", function (req, res) {

    const { messageId, appId } = req;

    console.log({messageId,appId})
    
    res.send("do not call me");

});

messageId.post("/", function (req, res) {

});

module.exports = messageId;