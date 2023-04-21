CosmosPlanegochi = global.CosmosPlanegochi
const libamf = global.libamf

class PlanegochiService extends libamf.Service {
    constructor() {
        super('planegochiService')
    }

    /*
        savePlanegochi

        Se reciben dos parametros:
          - userId: Int
          - planegochiData: String (este es el JSON serializado)

        Se debe retornar un booleano.
    */
    savePlanegochi(userId, planegochiData) {
    }

    /*
        findPlanegochiOfUser

        Se recibe un solo parametro:
          - userId: Int

        Se debe retornar un objeto CosmosPlanegochi.
    */
    findPlanegochiOfUser(userId) {
        return new CosmosPlanegochi()
    }
}
module.exports = PlanegochiService