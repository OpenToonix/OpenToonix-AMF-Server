const libamf = require('libamf')

const AwardService = require('./services/AwardService')
const CatalogService = require('./services/CatalogService')
const ModerateService = require('./services/ModerateService')
const PlanegochiService = require('./services/PlanegochiService')
const UserService = require('./services/UserService')

libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.ActionLogDto', require('./classes/CosmosActionLog'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.AwardDTO', require('./classes/CosmosAward'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.CountryDTO', require('./classes/CosmosCountry'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.FriendEntryDTO', require('./classes/CosmosFriendEntry'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.ItemDTO', require('./classes/CosmosItem'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.ModerateAnswerDTO', require('./classes/CosmosModerateAnswer'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.OfflineMessageDTO', require('./classes/CosmosOfflineMessage')) // Private Messages.
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.PlanegochiDTO', require('./classes/CosmosPlanegochi'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.PurchaseDTO', require('./classes/CosmosPurchase'))
libamf.registerClassAlias('com.turner.dmtla.cosmos.core.dto.UserDTO', require('./classes/CosmosUser'))

// Parametros de configuracion.
libamf.Service.ForceSuffix = false
libamf.Service.RequireRegistration = false
libamf.Server.DisableDefaultHome = true

const server = new libamf.Server({
  path: '/messagebroker/amf'
})

server.registerService(new AwardService())
server.registerService(new CatalogService())
server.registerService(new ModerateService())
server.registerService(new PlanegochiService())
server.registerService(new UserService())

server.listen(8081, () => {
  console.log('Listening on port ' + server.port)
})

server.app.get('/*', (req, res) => {
  res.send('<h2>OpenToonix AMF Server</h2>')
})