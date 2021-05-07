const queries = (db) => {
	const getUserById = async (id) => {
		const result = await db.query(`SELECT * FROM users WHERE "userId" = $1`, [
			id
		]);

		if (!result.rows[0]) {
			return {
				error: true,
				message: 'User not found'
			};
		}

		const { password, ...data } = result.rows[0];
		return data;
	};

	const getUserByUsername = async (username) => {
		const result = await db.query(`SELECT * FROM users WHERE "username" = $1`, [
			username
		]);

		if (!result.rows[0]) {
			return {
				error: true,
				message: 'User not found'
			};
		}

		const { password, ...data } = result.rows[0];
		return data;
	};

	return {
		getUserById,
		getUserByUsername
	};
};

module.exports = queries;
