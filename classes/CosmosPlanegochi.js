const CosmosMainClass = require('./CosmosMainClass')
const CosmosUser = require('./CosmosUser')

class CosmosPlanegochi extends CosmosMainClass {
    constructor (planegochiId, ownerUserData, planegochiData) {
        super(planegochiId)

        this.owner = new CosmosUser(ownerUserData)
        this.state = planegochiData
    }
}

module.exports = CosmosPlanegochi