const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;

const get100Games = async () => {
	let api = await axios.get(`${URL}/games?key=${API_KEY}`);
	let games = [];
	for (let i = 0; i < 5; i++) {
		await games.push(...api.data.results);
		api = await axios.get(api.data.next);
		i++;
	}
	return games;
};

// Create new Array with results of API and DB games
const cleanDataGames = async (apiGames) => {
	return await apiGames.map((G) => {
		return {
			id: G.id,
			name: G.name,
			background_image: G.background_image,
			released: G.released,
			rating: G.rating,
			platforms: G.platforms.map((e) => e.platform.name),
			genres: G.genres.map((e) => e.name),
			created: false,
		};
	});
};

// Clean data of unique game
const cleanGame = (game) => {
	return {
		id: game.id,
		name: game.name,
		background_image: game.background_image,
		released: game.released,
		rating: game.rating,
		platforms: game.platforms.map((e) => e.platform.name),
		genres: game.genres.map((e) => e.name),
		created: false,
	};
};

module.exports = { mapGames: cleanDataGames, get100Games, cleanGame };
