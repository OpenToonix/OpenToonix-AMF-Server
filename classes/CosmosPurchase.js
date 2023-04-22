const CosmosUser = require('./CosmosUser')
const CosmosItem = require('./CosmosItem')

class CosmosPurchase {
    constructor () {
        this.owner = new CosmosUser()
        this.purchaseDate = new Date()
        this.purchasedItem = new CosmosItem()
    }
}
module.exports = CosmosPurchase