const express = require('express');
const messages = require('../messages');
const appId = require('./appId');

const apps = express();

apps.use('/:appId', (req, res, next) => {
    req.appId = req.params.appId;
    next();
}, appId);


module.exports = apps;