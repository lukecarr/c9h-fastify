import c9h from 'c9h'
import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

const plugin: FastifyPluginAsync<any> = async (fastify, opts) => {
  fastify.decorate('c9h', c9h(opts))
}

declare module 'fastify' {
  interface FastifyInstance {
    c9h: Record<string, any>
  }
}

export default fp(plugin, {
  fastify: '3.x',
  name: 'c9h',
})
