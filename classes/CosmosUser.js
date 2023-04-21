class CosmosUser {
    constructor () {
        this.amountOfMinuts = 0
        this.username = ''
        this.lastUpdate = new Date()
        this.userStatus = ''
        this.message = ''
        this.now = new Date()
        this.avatarImagePath = ''
    }
}
module.exports = CosmosUser