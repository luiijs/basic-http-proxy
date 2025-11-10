import fastify from "fastify";
import fastifyHttpProxy from "@fastify/http-proxy";

const Fastify = fastify({
    logger: true
})

await Fastify.register(fastifyHttpProxy, {
    upstream: "https://yandex.com",
    prefix: "/name"
})

Fastify.listen({ port: 4000, host: '0.0.0.0' })