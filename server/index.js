require('dotenv').config();
const fastify = require('fastify')({ logger: true });


const dbConn = require('./plugins/db');
const authRoutes = require('./routes/auth-routes');
const postRoutes = require('./routes/post-routes');
const userRoutes = require('./routes/user-routes');

fastify.register(dbConn);
fastify.register(require('fastify-cookie'));
fastify.register(require('fastify-cors'), {
	credentials: true,
	origin: ['postgres://zlxxrrdvgqrshv:a7f7948c28503e6cdf178d19da4bc8b0b7e5ff5ddf017410806bf6b009ac45d1@ec2-54-155-226-153.eu-west-1.compute.amazonaws.com:5432/d61mcagtaddrj5']
});

fastify.register(postRoutes, { prefix: '/api/posts' });
fastify.register(authRoutes, { prefix: '/api/auth' });
fastify.register(userRoutes, { prefix: '/users' });

const PORT = process.env.PORT || 4000;

fastify.listen(PORT, (err, address) => {
	console.log(`Server is running on ${address}`);
});


module.exports = fastify
