const CosmosMainClass = require('./CosmosMainClass')
const CosmosUser = require('./CosmosUser')
const CosmosItem = require('./CosmosItem')

class CosmosPurchase extends CosmosMainClass {
    constructor (purchaseId, purchaseUserData, purchaseDate, purchasedItem) {
        super(purchaseId)

        this.owner = new CosmosUser(purchaseUserData)
        this.purchaseDate = new Date(purchaseDate)
        this.purchasedItem = new CosmosItem(purchasedItem)
    }
}

module.exports = CosmosPurchase