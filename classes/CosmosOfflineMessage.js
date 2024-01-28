const CosmosMainClass = require('./CosmosMainClass')
const CosmosUser = require('./CosmosUser')

class CosmosOfflineMessage extends CosmosMainClass{
    constructor (messageId, receiverUserData, senderUserData, messageSentDate, message) {
        super(messageId)

        this.receiver = new CosmosUser(receiverUserData)
        this.sender = new CosmosUser(senderUserData)
        this.sentDate = new Date(messageSentDate)
        this.text = message
    }
}

module.exports = CosmosOfflineMessage