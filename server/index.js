const fastify = require('fastify')({ logger: true });

fastify.get('/', (reequest, reply) => {
    reply.send({ hello: 'world!' });
});

const PORT = process.env.PORT || 4000;

fastify.listen(PORT, (err, address) => {
    console.log(`Server is running on ${address}`);
});