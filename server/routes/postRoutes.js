const { v4: uuidv4 } = require('uuid');

async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        try {
            const res = await fastify.db.query(`SELECT * FROM posts ORDER BY "date" DESC`);
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
                `SELECT * FROM posts WHERE "postId" = $1`,
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

    fastify.post('/add', async (request, reply) => {
        try {
            const postId = uuidv4();
            const {
                type,
                title,
                description,
                district,
                location,
                ownerPhone,
                price,
                originLink
            } = JSON.parse(request.body);

            const res = await fastify.db.query(`
                INSERT INTO posts ("postId", "type", "title", "description", "originLink", "district", "location", "ownerPhone", "price")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *
            `, [postId, type, title, description, originLink, district, location, ownerPhone, price]);

            reply.send(res.rows[0]);
        } catch (e) {
            console.log(e);
        }
    });
}

module.exports = routes;