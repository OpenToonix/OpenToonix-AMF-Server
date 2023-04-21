const libamf = require('libamf');

const client = new libamf.Client();

client.connect('http://localhost:8081/messagebroker/amf');
client.call('awardService.findAwardByUserId', 2).then(res => {
    console.log(res);
});