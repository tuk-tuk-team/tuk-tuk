const { v4: uuidv4 } = require('uuid');

async function routes(fastify, options) {
	const {
		getAllPosts,
		getPostById,
		addPost,
		editPost,
		deletePost
	} = require('../data-access/post-queries.js')(fastify.db);

	fastify.get('/', async (request, reply) => {
		const result = await getAllPosts();
		reply.send(result.rows);
	});

	fastify.get('/:id', async (request, reply) => {
		const result = await getPostById(request.params.id);
		reply.send(result.rows[0]);
	});

	fastify.post('/add', async (request, reply) => {
		const postId = uuidv4();
		const result = await addPost(postId, request.body);
		reply.send(result.rows[0]);
	});

	fastify.put('/:id/edit', async (request, reply) => {
		const result = await editPost(request.body);
		reply.send(result.rows[0]);
	});

	fastify.delete('/:id/delete', async (request, reply) => {
		const postId = request.params.id;
		const result = await deletePost(postId);
		reply.send(result.rows[0]);
	});
}

module.exports = routes;
