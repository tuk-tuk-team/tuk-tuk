const { v4: uuidv4 } = require('uuid');

async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        try {
            const res = await fastify.db.query(`SELECT * FROM posts ORDER BY "date" DESC`);
            reply.send(res.rows);
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
            reply.send(res.rows[0]);
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
                address,
                ownerPhone,
                price,
                originLink
            } = JSON.parse(request.body);

            const res = await fastify.db.query(`
                INSERT INTO posts ("postId", "type", "title", "description", "originLink", "district", "address", "ownerPhone", "price")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *
            `, [postId, type, title, description, originLink, district, address, ownerPhone, price]);

            reply.send(res.rows[0]);
        } catch (e) {
            console.log(e);
        }
    });

    fastify.put('/:id/edit', async (request, reply) => {
        try {
            const {
                postId,
                type,
                title,
                description,
                district,
                address,
                ownerPhone,
                price,
                originLink
            } = JSON.parse(request.body);

            const res = await fastify.db.query(`
                UPDATE posts SET
                "type" = $1,
                "title" = $2,
                "description" = $3,
                "district" = $4,
                "address" = $5,
                "ownerPhone" = $6,
                "price" = $7,
                "originLink" = $8
                WHERE "postId" = $9
                RETURNING *
            `, [type, title, description, district, address, ownerPhone, price, originLink, postId]);

            reply.send(res.rows[0]);
        } catch (e) {
            console.log(e);
        }
    });

    fastify.delete('/:id/delete', async (request, reply) => {
        try {
            const postId = request.params.id;
            const res = await fastify.db.query(`
                DELETE FROM posts
                WHERE "postId" = $1
                RETURNING *
            `, [postId]);

            reply.send(res.rows[0]);
        } catch (e) {
            console.log(e);
        }
    });
}

module.exports = routes;