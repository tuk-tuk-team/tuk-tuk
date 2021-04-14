async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        try {
            const res = await fastify.db.query(`SELECT * FROM posts`);
            if (res.rows.length) {
                reply.send(res.rows);
            } else {
                reply.send({ error: 'Posts are missing' });
            }
        } catch (e) {
            console.log(e);
        }
    });

    fastify.get('/:id', async (request, reply) => {
        try {
            const res = await fastify.db.query(
                `SELECT * FROM posts WHERE "PostID" = $1`,
                [request.params.id]
            );
            if (res.rows.length) {
                reply.send(res.rows[0]);
            } else {
                reply.send({ error: 'Post not found' });
            }
        } catch (e) {
            console.log(e);
        }
    });
}

module.exports = routes;