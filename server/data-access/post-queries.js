const queries = (db) => {
	const getAllPosts = async () => {
		const result = await db.query(`SELECT * FROM posts ORDER BY "date" DESC`);
		return result;
	};

	const getPostById = async (id) => {
		const result = await db.query(`SELECT * FROM posts WHERE "postId" = $1`, [
			id
		]);
		return result;
	};

	const addPost = async (postId, body) => {
		const {
			type,
			title,
			description,
			district,
			address,
			ownerPhone,
			price,
			originLink
		} = body;

		const result = await db.query(
			`
                INSERT INTO posts ("postId", "type", "title", "description", "originLink", "district", "address", "ownerPhone", "price")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *
            `,
			[
				postId,
				type,
				title,
				description,
				originLink,
				district,
				address,
				ownerPhone,
				price
			]
		);

		return result;
	};

	const editPost = async (body) => {
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
		} = body;

		const result = await db.query(
			`
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
            `,
			[
				type,
				title,
				description,
				district,
				address,
				ownerPhone,
				price,
				originLink,
				postId
			]
		);

		return result;
	};

	const deletePost = async (id) => {
		const result = await db.query(
			`
                DELETE FROM posts
                WHERE "postId" = $1
                RETURNING *
            `,
			[id]
		);

		return result;
	};

	return {
		getAllPosts,
		getPostById,
		addPost,
		editPost,
		deletePost
	};
};

module.exports = queries;
