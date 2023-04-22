const CosmosUser = require('./CosmosUser')

class CosmosOfflineMessage {
    constructor () {
        this.receiver = new CosmosUser()
        this.sender = new CosmosUser()
        this.sentDate = new Date()
        this.text = ''
    }
}
module.exports = CosmosOfflineMessage