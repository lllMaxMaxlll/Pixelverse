require("dotenv").config();
const axios = require("axios");
const { Videogame } = require("../../db");
const { URL, API_KEY } = process.env;

// Create new Array with results of API and DB games
const gamesArray = (dbGames, apiGames) => {
	const results = [...dbGames, ...apiGames].map((G) => {
		return {
			id: G.id,
			name: G.name,
			background_image: G.background_image,
			released: G.released,
			rating: G.rating,
			platforms: G.platforms,
			create: false,
		};
	});

	return results;
};

// Games from Database and API by name
const gamesByName = async (name) => {
	// Get all games from Database by name
	const dbGames = await Videogame.findAll({ where: { name } });
	// Get all games from API by name
	const apiGames = await axios.get(
		`${URL}/games?key=${API_KEY}&search=${name}`
	);
	// Only 15 results
	const games = gamesArray(dbGames, apiGames.data.results).slice(0, 15);

	// If no results
	if (!games.length) throw Error("Games not found");

	return games;
};

const getAllGames = async () => {
	// Get all games from Database
	const dbGames = await Videogame.findAll();
	// Get all games from API
	const apiGames = await axios.get(`${URL}/games?key=${API_KEY}`);
	console.log(apiGames.data.results[0]);
	const games = gamesArray(dbGames, apiGames.data.results);

	// If no results
	if (!games.length) throw Error("Games not found");

	return games;
};

module.exports = { gamesByName, getAllGames };

// searchGameByName(name) {
//    buscar en la bdd con findAll where name
//    buscar de la api games?search={game}
//    hacer el map
//
//    retornar el array mapeado
//
// }

// getAllGames() {
//    buscar en la bdd
//    buscar en la api
//    retornar el array mapeado
// }
