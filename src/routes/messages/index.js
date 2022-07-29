const { S3Client } = require('@aws-sdk/client-s3');
const express = require('express');
const data = require('../../../data');
const httphelper = require('../../helpers/httphelper');
const { endPointFactory, formEndpoint } = require('../../helpers/httphelper');
const messageId = require('./messageId');
const messages = express();
require('dotenv').config()
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const https = require("https");

const fs = require('fs');
const request = require('request');




messages.use("/:messageId", (req, res, next) => {

    req.messageId = req.params.messageId;
    next();
}, messageId);

messages.post("/", function (req, res) {

    try {

        const { toAppId, apiKey, region } = data.apiKeys[req.appId];
        const payLoad = req.body;
        const { sender, category, receiver, receiverType, appId, type } = { ...payLoad.data, ...payLoad };
        const messageData = (payLoad.data.data);
        const metadata = messageData.metadata ? messageData.metadata : {};
        delete messageData['entities'];
        delete messageData['updatedAt'];

        const toPayload = {
            category,
            type,
            receiver,
            receiverType, data: messageData,
            skipWebhooks: ["sync_service"]
        }, toHeaders = {
            apiKey,
            onBehalfOf: sender
        }, { path, method } = formEndpoint(toAppId, endPointFactory.sendMessage.id);

        if (category === 'message' && (type === 'image' || type === 'file' || type === 'video' || type === 'audio')) {

            messagesHelper.processMediaMessage(messageData).then((file)=>{
                
                
            })


        }else{
            try {
                httphelper.makeHttpCall(toPayload, method, toHeaders, path);             
            } catch (e) {
                console.log(e)
            }
        }
        
        try{
            httphelper.makeHttpCall({ message: toPayload }, method, {}, process.env.MQTT_URL)
        }catch(e){
            console.log(e)
        }



        res.send({ toPayload, toHeaders });

    } catch (e) {
        console.log({ e });
        res.status(404);
        res.send("no such app presence");
    }


});

const messagesHelper = {
    processMediaMessage: (messageData) => {
        return new Promise((res,rej)=>{
            const filename = messageData.url;
    
            const file = fs.createWriteStream("data.png");
    
            
            https.get(filename, response => {
                
                var stream = response.pipe(file);
    
                stream.on("finish", function () {
                    res(file);
                    console.log("done");
                });
            });
    
           
        });
       
    }

}

module.exports = messages;


