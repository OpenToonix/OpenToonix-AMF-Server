class CosmosAward {
    constructor (awardId, userId, award, category, creationDate, data) {
        this.id = awardId
        this.userId = userId
        this.award = award
        this.category = category
        this.creationDate = new Date(creationDate)
        this.data = data
    }
}

module.exports = CosmosAward