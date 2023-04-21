require('./globals')

server = global.server

server.on('data', packet => {
})

server.listen(8081, () => {
  console.log('Listening on port ' + server.port)
})