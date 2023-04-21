ArrayCollection = global.ArrayCollection

class CosmosItem {
    constructor () {
        this.availability = 0
        this.cost = 0
        this.countries = new ArrayCollection()
        this.englishDescription = ''
        this.expirationDate = new Date()
        this.portugueseDescription = ''
        this.spanishDescription = ''
        this.id = ''
    }
}
module.exports = CosmosItem