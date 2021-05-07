async function routes(fastify, options) {
	const authService = require('../services/auth-service')(fastify.db);

	fastify.post('/register', async (request, reply) => {
		const result = await authService.register(request.body);
		reply.send(result);
	});

	fastify.post('/login', async (request, reply) => {
		const result = await authService.login(request.body, reply);
		reply.send(result);
	});

	fastify.post('/logout', async (request, reply) => {
		const result = await authService.logout(reply);
		reply.send(result);
	});
}

module.exports = routes;
