const { v4: uuidv4 } = require('uuid');
const queries = require('../data-access/index.js');

async function routes(fastify, options) {
	const queriesData = queries(fastify.db);

	fastify.get('/', async (request, reply) => {
		const result = await queriesData.getAllPostsData();
		reply.send(result.rows);
	});

	fastify.get('/:id', async (request, reply) => {
		const result = await queriesData.getPostByIdData(request.params.id);
		reply.send(result.rows[0]);
	});

	fastify.post('/add', async (request, reply) => {
		const postId = uuidv4();
		const result = await queriesData.addPostData(postId, request.body);
		reply.send(result.rows[0]);
	});

	fastify.put('/:id/edit', async (request, reply) => {
		const result = await queriesData.editPostData(request.body);
		reply.send(result.rows[0]);
	});

	fastify.delete('/:id/delete', async (request, reply) => {
		const postId = request.params.id;
		const result = await queriesData.deletePostData(postId);
		reply.send(result.rows[0]);
	});
}

module.exports = routes;
