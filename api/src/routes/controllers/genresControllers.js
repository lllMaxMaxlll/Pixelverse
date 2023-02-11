const { Genre } = require("../../db");
const getApiGenres = require("./getGenresFN");

const getGenres = async () => {
	// const exits = await Genre.findAll();

	// All genres from API
	const apiGenres = await getApiGenres();
	// Add to DB
	const genreToDB = await Genre.bulkCreate(
		await apiGenres.map((G) => ({
			name: G.name,
		}))
	);
	return genreToDB;
};

module.exports = { getGenres };
