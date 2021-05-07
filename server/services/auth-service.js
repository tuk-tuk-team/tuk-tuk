const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const authService = (db) => {
	const register = async (body) => {
		const candidate = await db.query(
			`
                SELECT * FROM users
                WHERE "email" = $1
            `,
			[body.email]
		);

		if (candidate.rows.length) {
			return {
				error: true,
				errorMsg: 'User with this email already exists'
			};
		}

		const newUser = {
			userId: uuidv4(),
			email: body.email,
			password: await bcrypt.hash(body.password, 10)
		};

		return await db.query(
			`
                INSERT INTO users ("userId", "email", "password")
                VALUES ($1, $2, $3)
                RETURNING *
            `,
			[newUser.userId, newUser.email, newUser.password]
		);
	};

	const login = async (body) => {
		const candidate = await db.query(
			`
                SELECT * FROM users
                WHERE "email" = $1
            `,
			[body.email]
		);

		if (!candidate.rows.length) {
			return {
				error: true,
				errorMsg: 'Incorrect credentials'
			};
		}

		if (!(await bcrypt.compare(body.password, candidate.rows[0].password))) {
			return {
				error: true,
				errorMsg: 'Incorrect password'
			};
		}

		return 'Logged in successfully';
	};

	return {
		register,
		login
	};
};

module.exports = authService;
