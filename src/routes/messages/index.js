const express = require('express');
const data = require('../../../data');
const httphelper = require('../../helpers/httphelper');
const {endPointFactory, formEndpoint } = require('../../helpers/httphelper');
const messageId = require('./messageId');
const messages = express();



messages.use("/:messageId", (req, res, next) => {

    req.messageId = req.params.messageId;
    next();
}, messageId);

messages.post("/", function (req, res) {

    try {

        const { toAppId, apiKey, region } = data.apiKeys[req.appId];
        const payLoad = req.body;
        const { sender, category, receiver, receiverType, appId, type } = { ...payLoad.data, ...payLoad };
        const messageData = (payLoad.data.data)
        delete messageData['entities'];
        delete messageData['updatedAt'];

        const toPayload = {
            category,
            type,
            receiver,
            receiverType, data: messageData,
        }, toHeaders = {
            apiKey,
            onBehalfOf: sender
        }, { path, method } = formEndpoint(toAppId, endPointFactory.sendMessage.id);

        httphelper.makeHttpCall(toPayload, method, toHeaders, path);

        res.send({ toPayload, toHeaders });

    } catch (e) {
        res.status(404);
        res.send("no such app presence");
    }


});

const messagesHelper = {
    createMessagePayload: (rawData) => {

    }
}


module.exports = messages;