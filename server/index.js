require('dotenv').config();
const fastify = require('fastify')({ logger: true });

const dbConn = require('./plugins/db');
const postRoutes = require('./routes/postRoutes');

fastify.register(dbConn);
fastify.register(postRoutes, { prefix: '/api/posts' });

fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world!' });
});

const PORT = process.env.PORT || 4000;

fastify.listen(PORT, (err, address) => {
    console.log(`Server is running on ${address}`);
});