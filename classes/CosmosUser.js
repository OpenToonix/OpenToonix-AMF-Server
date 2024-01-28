const CosmosMainClass = require('./CosmosMainClass')

class CosmosUser extends CosmosMainClass {
    constructor (userId, amountOfMinuts, username, lastUpdate, userStatus, message, avatarImagePath) {
        super(userId)
        
        this.amountOfMinuts = amountOfMinuts
        this.username = username
        this.lastUpdate = new Date(lastUpdate)
        this.userStatus = userStatus
        this.message = message
        this.now = new Date()
        this.avatarImagePath = avatarImagePath
    }
}

module.exports = CosmosUser