const ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection')

class CosmosItem {
    constructor (
            availability,
            cost,
            countries,
            expirationDate,
            englishDescription,
            portugueseDescription,
            spanishDescription,
            itemId
        ) {
        this.availability = availability
        this.cost = cost
        this.countries = new ArrayCollection(countries) // ArrayCollection de CosmosCountry
        this.expirationDate = new Date(expirationDate)
        this.englishDescription = englishDescription
        this.portugueseDescription = portugueseDescription
        this.spanishDescription = spanishDescription
        this.id = itemId
    }
}

module.exports = CosmosItem