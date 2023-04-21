const ArrayCollection = global.ArrayCollection
CosmosFriend = global.CosmosFriend
CosmosOfflineMessage = global.CosmosOfflineMessage
CosmosPurchase = global.CosmosPurchase
CosmosUser = global.CosmosUser
const libamf = global.libamf

class UserService extends libamf.Service {
    constructor() {
        super('userService')
    }

    /*
        addFriend

        Se reciben dos parametros:
          - senderUserId: Int
          - receiverUserId: Int

        Se debe retornar un booleano.
    */
    addFriend(senderUserId, receiverUserId) {
    }

    /*
        changeUserStatus

        Se reciben cuatro parametros:
          - userId: Int
          - ¿status?: String
          - amountOfMinuts: Int
          - ¿message?: String

        Se debe retornar un booleano.
    */
    changeUserStatus(userId, status, amountOfMinuts, message) {
    }

    /*
        blockFriend

        Se reciben dos parametros:
          - userId: Int
          - friendId: Int

        Se debe retornar un booleano.
    */
    blockFriend(userId, friendId) {
    }

    /*
        banUser

        Se recibe un parametro:
          - CosmosDenounceVO: Object
              Variables del objeto:
                - userId: Int
                - denouncedId: Int
                - area: String
                - denouncedUsername: String
                - denouncedEmail: String
                - reason: String
                - date: Date
                - languageCode: String

        Se debe retornar un booleano.
    */
    banUser(CosmosDenounceVO) {
    }

    /*
        registerUser

        Se reciben tres parametros:
          - userId: Int
          - userName: String
          - avatarImagePath: String

        Se debe retornar un booleano.
    */
    registerUser(userId, userName, avatarImagePath) {
    }

    /*
        deleteFriend

        Se reciben dos parametros:
          - userId: Int
          - friendId: Int

        Se debe retornar un booleano.
    */
    deleteFriend(userId, friendId) {
    }

    /*
        sendOfflineMessage

        Se reciben tres parametros:
          - senderUserId: Int
          - receiverUserId: Int
          - message: Int

        Se debe retornar un booleano.
    */
    sendOfflineMessage(senderUserId, receiverUserId, message) {
    }

    /*
        unblockFriend

        Se reciben dos parametros:
          - userId: Int
          - friendId: Int

        Se debe retornar un booleano.
    */
    unblockFriend(userId, friendId) {
    }

    /*
        findAvailablePurchases

        Se recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosPurchase (por cada registro) dentro de un ArrayCollection.
    */
    findAvailablePurchases(userId) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosPurchase()
        )

        return resp
    }

    /*
        findAwardsOfUser (NO SE USA)
    */
    findAwardsOfUser() {
    }

    /*
        findFriendList

        Se recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosFriend (por cada registro) dentro de un ArrayCollection.
    */
    findFriendList(userId) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosFriend()
        )

        return resp
    }

    /*
        findOfflineMessages

        Se recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosOfflineMessage (por cada registro) dentro de un ArrayCollection.
    */
    findOfflineMessages(userId) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosOfflineMessage()
        )

        return resp
    }

    /*
        findPurchases

        Se recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosPurchase (por cada registro) dentro de un ArrayCollection.
    */
    findPurchases(userId) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosPurchase()
        )

        return resp
    }

    /*
        findUnexpiredPurchases

        Se recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosPurchase (por cada registro) dentro de un ArrayCollection.
    */
    findUnexpiredPurchases(userId) {
        const resp = new ArrayCollection()
        resp.push(
            new CosmosPurchase()
        )

        return resp
    }

    /*
        findUser

        Se recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosUser.
    */
    findUser(userId) {
        return new CosmosUser()
    }
}
module.exports = UserService