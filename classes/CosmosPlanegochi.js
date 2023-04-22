const CosmosUser = require('./CosmosUser')

class CosmosPlanegochi {
    constructor () {
        this.owner = new CosmosUser()
        this.state = ''
    }
}
module.exports = CosmosPlanegochi