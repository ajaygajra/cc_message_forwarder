curl --request POST \
     --url https://app_id.api-region.cometchat.io/v3/messages \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --header 'apiKey: this_is_api_key' \
     --header 'onBehalfOf: superhero2' \
     --data '
{
     "category": "message",
     "type": "text",
     "data": {
          "text": "Hi Tom!",
          "metadata": {
               "key1": "value1",
               "key2": "value2"
          }
     },
     "receiver": "superhero1",
     "receiverType": "user"
}
'