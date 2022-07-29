const bodyParser = require('body-parser');
const express = require('express');
const apps = require('./routes/apps');
const auth = require('./middlewares/auth').auth;
const messages = require('./routes/messages')
const app = express()
const port = 9091



app.use(bodyParser.json());
app.use("/apps", auth, apps);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})