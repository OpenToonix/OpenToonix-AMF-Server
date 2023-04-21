CosmosUser = global.CosmosUser

class CosmosFriend {
    constructor () {
        this.friend = new CosmosUser()
        this.blocked = false
    }
}

module.exports = CosmosFriend