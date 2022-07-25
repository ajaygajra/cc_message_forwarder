const fetch = require('node-fetch');
const data = require("../../data");
const { response } = require("../routes/messages");

const endPointFactory = {
    sendMessage: {
        id: 'sendMessage',
        path: '/v3/messages',
        method: 'post'
    }
}
module.exports = {
    makeHttpCall: (data = {}, method = 'post', headers = {}, url = undefined) => {

        headers = { ...headers, 'Content-Type': 'application/json' }

        if (url) {
            switch (method.toLowerCase()) {
                case "post": {

                    const payload = {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers
                    }

                    fetch(url, payload
                    ).then(response => {
                        console.log("This is response", response.json().then(res => {
                            console.log(JSON.stringify(res));
                        }), error => {
                            console.log(JSON.stringify(error));
                        })
                    }, error => {
                        console.log(JSON.stringify(error));
                    })


                    console.log(data);



                    break;
                } case "get": {

                    break;
                }
                default:
                    //TODO log failed hooks
                    break;
            }
        } else {
            //TODO log failed hooks
        }

    },
    formEndpoint: (toApp, endPointId) => {
        const path = `https://${toApp}.${data.apiKeys[toApp].domain}${endPointFactory[endPointId].path}`;
        const method = `${endPointFactory[endPointId].method}`;
        return { path, method }
    }, endPointFactory

}