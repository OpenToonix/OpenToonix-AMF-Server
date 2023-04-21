class CosmosActionLog {
    constructor () {
        this.actionDate = new Date()
        this.action = ''
        this.area = ''
        this.message = ''
        this.serverName = ''
        this.username = ''
    }
}
module.exports = CosmosActionLog