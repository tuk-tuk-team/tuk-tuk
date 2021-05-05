const { v4: uuidv4 } = require('uuid');
const queries = require('../dataAccess/index.js');

async function routes(fastify, options) {

    const queriesData = queries(fastify.db)

    fastify.get('/', async (request, reply) => {
        try {

            const result = await queriesData.getAllPostsData();
            reply.send(result.rows)

        } catch (e) {
            console.log(e);
        }
    });

    fastify.get('/:id', async (request, reply) => {
        try {

            const result = await queriesData.getPostByIdData(request.params.id);
            reply.send(result.rows[0]);

        } catch (e) {
            console.log(e);
        }
    });

    fastify.post('/add', async (request, reply) => {
        try {

            const postId = uuidv4();
            const result = await queriesData.addPostData(postId, request.body);
            reply.send(result.rows[0]);

        } catch (e) {
            console.log(e);
        }
    });

    fastify.put('/:id/edit', async (request, reply) => {
        try {

            const result = await queriesData.editPostData(request.body);
            reply.send(result.rows[0]);

        } catch (e) {
            console.log(e);
        }
    });

    fastify.delete('/:id/delete', async (request, reply) => {
        try {

            const postId = request.params.id;
            const result = await queriesData.deletePostData(postId);
            reply.send(result.rows[0]);
            
        } catch (e) {
            console.log(e);
        }
    });
}

module.exports = routes;
