const fp = require('fastify-plugin');
const Pool = require('pg').Pool;
const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME
});

async function dbConnection(fastify, options, next) {
	console.log(process.env.DB_HOST);
	fastify.decorate('db', pool);
	next();
}

module.exports = fp(dbConnection);
