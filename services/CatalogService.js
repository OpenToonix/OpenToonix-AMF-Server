const ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection')
const CosmosItem = require('../classes/CosmosItem')
const CosmosPurchase = require('../classes/CosmosPurchase')
const libamf = require('libamf')

class CatalogService extends libamf.Service {
    constructor() {
        super('catalogService')
    }

    /*
        saveItem

        Se recibe un solo parametro:
          - CosmosItemVO: Object
              Variables del objeto:
                - availability: Int
                - cost: Int
                - countryList: Array
                - descriptionEN: String
                - descriptionES: String
                - descriptionPT: String
                - expirationDate: Date
                - id: Object

        Se debe retornar un booleano.
    */
    saveItem(CosmosItemVO) {
    }

    /*
        purchaseItem

        Se reciben dos parametros:
          - userId: Int
          - itemId: Int

        Se debe retornar un booleano.
    */
    purchaseItem(userId, itemId) {
    }

    /*
        saveActionLog

        Se recibe un solo parametro:
          - CosmosActionLogVO: Object
              Variables del objeto:
                - action_date: Date
                - action: String
                - area: String
                - message: String
                - serverName: String
                - username: String

        Se debe retornar un booleano.
    */
    saveActionLog(CosmosActionLogVO) {
    }

    /*
        findItem

        Se recibe un solo parametro:
          - itemId: Int

        Se debe retornar un objeto CosmosItem.
    */
    findItem(itemId) {
        return new CosmosItem()
    }

    /*
        findAllItems

        No se recibe ningun parametro.

        Se debe retornar un objeto CosmosItem (por cada registro) dentro de un ArrayCollection.
    */
    findAllItems() {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosItem()
        )

        return resp
    }

    /*
        findItemsAvailableInCountry

        Se recibe un solo parametro:
          - CosmosCountryVO: Object
              Variables del objeto:
                - code: String

        Se debe retornar un objeto CosmosItem (por cada registro) dentro de un ArrayCollection.
    */
    findItemsAvailableInCountry(CosmosCountryVO) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosItem()
        )

        return resp
    }

    /*
        findPurchasesOfItem

        Se recibe un solo parametro:
          - itemId: Int

        Se debe retornar un objeto CosmosPurchase (por cada registro) dentro de un ArrayCollection.
    */
    findPurchasesOfItem(itemId) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosPurchase()
        )

        return resp
    }

    /*
        findUnexpiredItems

        No se recibe ningun parametro, osea, es void.

        Se debe retornar un objeto CosmosItem (por cada registro) dentro de un ArrayCollection.
    */
    findUnexpiredItems() {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosItem()
        )

        return resp
    }
}
module.exports = CatalogService