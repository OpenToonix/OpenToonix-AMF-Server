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
          - username: Array. (Desconozco porque llega como Array)
          - language: String. (En el cliente español se recibe "Toonix Content : Spanish")
          - type: String. (Siempre se recibe "UserName")
          - tempListType: String. (Es el tipo de temp list: white o black, pero siempre se recibe white (whitelist))
          - param2: Boolean. (El cliente siempre envia false)

        Hay que retornar un booleano.
    */
    allowWordsTemporarily(usernameArr, language, type, tempListType, param2) {
    }

    /* 
        realTimeMessageFilterWhiteList

        Se reciben cuatro parametros:
          - senderUserName: String
          - receiverUserName: String
          - message: String
          - languageCode: String

        Se debe retornar un objeto CosmosModerateAnswer.
    */
    realTimeMessageFilterWhiteList(senderUserName, receiverUserName, message, languageCode) {
        /* 
            En caso de ser existosa esta peticion, "code" debe ser 0,
            pero si el usuario esta baneado o silenciado, se debe enviar un code distinto a 0 (cualquiera).

            En "message" se debe retornar el mensaje filtrado.

            Nota:
            Si una palabra prohibida esta dentro del mensaje, esta se debe reemplazar por una almohadilla (#)
            (La almohadilla debe tener la longitud de la palabra prohibida) 
        */

        /* 
          return new CosmosModerateAnswer(code, message)
        */
        return new CosmosModerateAnswer()
    }
}

module.exports = ModerateService