import fastify from 'fastify'
import c9h from '../..'

const server = fastify({ logger: true })

server.register(c9h, {
  defaults: {
    hello: 'this is a default',
  },
})

server.get('/', async function() {
  return { 'hello there': this.c9h.hello }
})

const start = async () => {
  try {
    await server.listen(3000)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()