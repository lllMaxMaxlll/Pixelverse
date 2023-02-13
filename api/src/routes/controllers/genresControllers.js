const { Genre } = require("../../db");
const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;

const getGenres = async () => {
	// All genres from API
	let apiGenres = await axios.get(`${URL}/genres?key=${API_KEY}`);
	apiGenres = apiGenres.data.results;
	// Add to DB if not exits
	apiGenres.forEach(async (G) => await Genre.findOrCreate({ where: { name: G.name } }));
	return await Genre.findAll();
};

module.exports = { getGenres };
