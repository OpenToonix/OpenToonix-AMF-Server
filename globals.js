global.libamf = require('libamf')

global.ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection')

global.CosmosActionLog = require('./classes/CosmosActionLog')
global.CosmosAward = require('./classes/CosmosAward')
global.CosmosCountry = require('./classes/CosmosCountry')
global.CosmosFriend = require('./classes/CosmosFriend')
global.CosmosItem = require('./classes/CosmosItem')
global.CosmosModerateAnswer = require('./classes/CosmosModerateAnswer')
global.CosmosOfflineMessage = require('./classes/CosmosOfflineMessage')
global.CosmosPlanegochi = require('./classes/CosmosPlanegochi')
global.CosmosPurchase = require('./classes/CosmosPurchase')
global.CosmosUser = require('./classes/CosmosUser')

// PARAMETROS DE CONFIGURACION
libamf.Service.ForceSuffix = false
libamf.Service.RequireRegistration = false
libamf.Server.DisableDefaultHome = true

libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.ActionLogDto', CosmosActionLog)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.AwardDTO', CosmosAward)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.CountryDTO', CosmosCountry)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.FriendEntryDTO', CosmosFriend)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.ItemDTO', CosmosItem)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.ModerateAnswerDTO', CosmosModerateAnswer)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.OfflineMessageDTO', CosmosOfflineMessage) // Private Messages.
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.PlanegochiDTO', CosmosPlanegochi)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.PurchaseDTO', CosmosPurchase)
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.UserDTO', CosmosUser)

global.server = new libamf.Server({
    path: '/messagebroker/amf'
})

const AwardService = require('./services/AwardService')
const CatalogService = require('./services/CatalogService')
const ModerateService = require('./services/ModerateService')
const PlanegochiService = require('./services/PlanegochiService')
const UserService = require('./services/UserService')

server.registerService(new AwardService())
server.registerService(new CatalogService())
server.registerService(new ModerateService())
server.registerService(new PlanegochiService())
server.registerService(new UserService())

server.app.get('/*', (req, res) => {
    res.send('<h2>Cosmos AMF Server</h2>')
})