const libamf = require('libamf')

class HomeSrv extends libamf.Service {
    constructor() {
        super('homeSrv_SLOT_1')
    }

    /*
        getKey

        No se reciben parametros.

        Se debe retornar un string con la key.
    */
    getKey(){
    }

    /*
        updateCreditDecrease

        Se reciben cuatro parametros:
          - userId: Int
          - creditsAmount: Int
          - hashedKey: String
          - unhashedKey: String

        Se debe retornar un booleano.
    */
    updateCreditDecrease(userId, creditsAmount, hashedKey, unhashedKey){
    }

    /*
        updateCreditIncrease

        Se reciben cuatro parametros:
          - userId: Int
          - creditsAmount: Int
          - hashedKey: String
          - unhashedKey: String

        Se debe retornar un booleano.
    */
    updateCreditIncrease(userId, creditsAmount, hashedKey, unhashedKey){
    }
}

module.exports = HomeSrv