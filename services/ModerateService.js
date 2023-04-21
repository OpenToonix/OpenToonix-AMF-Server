const ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection')
const CosmosModerateAnswer = require('../classes/CosmosModerateAnswer')
const libamf = require('libamf')

class ModerateService extends libamf.Service {
    constructor() {
        super('moderateService')
    }

    /*
      allowWordsTemporarily

        Recibe cinco parametros:
          - Username como Array, no se porque.
          - Un String. (En el cliente español envia "Toonix Content : Spanish")
          - Un String. ("UserName") Ni idea para que es esto.
          - Un String. ("white") Lo mismo para esto.
          - Un booleano. Por default envia false.

        Hay que retornar un booleano.
    */
    allowWordsTemporarily(usernameArr, str1, str2, str3, bool) {
    }

    /* 
        realTimeMessageFilterWhiteList

        Se recibe un solo parametro:
          - CosmosMessageData: Object
              Variables del objeto:
                - senderUserName: String
                - receiverUserName: String
                - message: String
                - language: String

        Se debe retornar un objeto CosmosModerateAnswer.
    */
    realTimeMessageFilterWhiteList(CosmosMessageData) {
        /* 
            Si no me equivoco, en caso de ser existosa esta peticion, "code" debe ser 0.
            Y "message" solo debe retornar el valor de la variable de entrada.
        */

        /* 
          return new CosmosModerateAnswer(code, message)
        */
        return new CosmosModerateAnswer()
    }

    /*
        logEvents

        CosmosLogEvent: Objeto
          Variables:
            - place: String
            - value: String
            - senderUserName: String
            - receiverUserName: String
            - event: String

        Retorna un booleano.
    */
    logEvents(CosmosLogEvent) {
    }

    /* 
        disallowWords (Desconozco si se usa este servicio)

        Recibe cuatro parametros (No se que data se recibe): 
          - arr: Array
          - str1: String
          - str2: String
          - str3: String

        Retornar un booleano.
    */
    disallowWords(arr, str1, str2, str3) {
    }
}
module.exports = ModerateService