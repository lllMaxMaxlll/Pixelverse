const { Genre } = require("../../db");
const getApiGenres = require("./getGenresFN");

const getGenres = async () => {
	// All genres from API
	const apiGenres = await getApiGenres();
	// Add to DB
	apiGenres.forEach(async (G) => await Genre.findOrCreate({ where: { name: G.name } }));
	return await Genre.findAll();
};

module.exports = { getGenres };
