const ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection')
const CosmosAward = require('../classes/CosmosAward')
const libamf = require('libamf')

class AwardService extends libamf.Service {
    constructor() {
        super('awardService')
    }

    /*
        saveUserAward

        Se recibe un solo parametro:
          - CosmosAwardVO: Object
              Variables del objeto:
                - id: Int
                - userId: Int
                - award: String
                - category: String
                - creationDate: Date
                - data: String

        Se debe retornar un booleano.
    */
    saveUserAward(CosmosAwardVO) {
    }

    /*
        findAwardByUserId

        Recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosAward (por cada registro) dentro de un ArrayCollection.
    */
    findAwardByUserId(userId) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosAward()
        )

        return resp
    }

    /*
        findAwardByCategory

        Se recibe un solo parametro:
          - category: String

        Se debe retornar un objeto CosmosAward (por cada registro) dentro de un ArrayCollection.
    */
    findAwardByCategory(category) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosAward()
        )

        return resp
    }
}

module.exports = AwardService