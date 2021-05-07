async function routes(fastify, options) {
	const { authHook } = require('../services/auth-service')(fastify.db);
	const { getUserByUsername } = require('../data-access/user-queries')(
		fastify.db
	);

	fastify.get(
		'/:username',
		{ preValidation: authHook },
		async (request, reply) => {
			const result = await getUserByUsername(request.params.username);
			reply.send(result);
		}
	);
}

module.exports = routes;
