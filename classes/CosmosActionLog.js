class CosmosActionLog {
    constructor (actionDate, action, area, message, serverName, username) {
        this.actionDate = new Date(actionDate)
        this.action = action
        this.area = area
        this.message = message
        this.serverName = serverName
        this.username = username
    }
}

module.exports = CosmosActionLog