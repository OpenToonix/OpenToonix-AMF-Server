const CosmosMainClass = require('./CosmosMainClass')
const CosmosUser = require('./CosmosUser')

class CosmosFriendEntry extends CosmosMainClass {
    constructor (friendEntryId, friendUserData, blocked) {
        super(friendEntryId)

        this.friend = new CosmosUser(friendUserData)
        this.blocked = blocked
    }
}

module.exports = CosmosFriendEntry