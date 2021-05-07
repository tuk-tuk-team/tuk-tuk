require('dotenv').config();
const fastify = require('fastify')({ logger: true });

const dbConn = require('./plugins/db');
const postRoutes = require('./routes/post-routes');
const authRoutes = require('./routes/auth-routes');

fastify.register(dbConn);
fastify.register(require('fastify-cookie'));
fastify.register(require('fastify-cors'), {
	credentials: true,
	origin: ['http://localhost:3000']
});

fastify.register(postRoutes, { prefix: '/api/posts' });
fastify.register(authRoutes, { prefix: '/auth' });

const PORT = process.env.PORT || 4000;

fastify.listen(PORT, (err, address) => {
	console.log(`Server is running on ${address}`);
});
