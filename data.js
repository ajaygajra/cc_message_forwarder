module.exports = {
    apiKeys: {
        abcd: {
            toAppId: "abcd",
            apiKey: "apiKey",
            region: "us",
            domain:"api-us.cometchat.io",
            external_base_domain:'api-%s.cometchat.io',
            internae_base_domain:'api-%s.cometchat-ship.io'
        },
        '2149180b93bc24f2': {
            toAppId: "2149180b93bc24f2",
            apiKey: "ec757fee493d7bf91c38c0039777c32047e37b35",
            region: "us",
            domain:"api-us.cometchat.io",
            external_base_domain:'api-%s.cometchat.io',
            internae_base_domain:'api-%s.cometchat-ship.io'
        },'196369b104e6a373':{
            toAppId: "196369b104e6a373",
            apiKey: "3411b6887ab44d0082edef7f422622e62e1a40fe",
            region: "us",
            domain:"api-eu.cometchat.io",
            external_base_domain:'api-%s.cometchat.io',
            internae_base_domain:'api-%s.cometchat-ship.io'
        },
        abcde: {
            
            toAppId: "abcde",
            apiKey: "apiKey",
            region: "eu",
        }
    },
    mock_message: {
        "trigger": "after_message",
        "data": {
            "id": "1",
            "conversationId": "superhero4_user_superhero5",
            "sender": "superhero5",
            "receiverType": "user",
            "receiver": "superhero4",
            "category": "message",
            "type": "text",
            "data": {
                "text": "Hi Webhook Test",
                "entities": {
                    "sender": {
                        "entity": {
                            "uid": "superhero5",
                            "name": "Cyclops",
                            "avatar": "https://data-us.cometchat.io/assets/images/avatars/cyclops.png",
                            "status": "offline",
                            "role": "default"
                        },
                        "entityType": "user"
                    },
                    "receiver": {
                        "entity": {
                            "uid": "superhero4",
                            "name": "Wolverine",
                            "avatar": "https://data-us.cometchat.io/assets/images/avatars/wolverine.png",
                            "status": "offline",
                            "role": "default"
                        },
                        "entityType": "user"
                    }
                }
            },
            "sentAt": 1586435925,
            "updatedAt": 1586435925,
        },
        "appId": "fromm_app_id",
        "webhook": "send-message"
    }
}


