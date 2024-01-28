const CosmosMainClass = require('./CosmosMainClass')

class CosmosCountry extends CosmosMainClass {
    constructor (countryId, countryCode, countryName) {
        super(countryId)
        
        this.code = countryCode
        this.name = countryName
    }
}

module.exports = CosmosCountry