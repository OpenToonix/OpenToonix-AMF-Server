CosmosUser = global.CosmosUser
CosmosItem = global.CosmosItem

class CosmosPurchase {
    constructor () {
        this.owner = new CosmosUser()
        this.purchaseDate = new Date()
        this.purchasedItem = new CosmosItem()
    }
}
module.exports = CosmosPurchase