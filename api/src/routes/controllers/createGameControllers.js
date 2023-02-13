const { Videogame, Genre, Platform } = require("../../db");

// Create new game
const createGame = async (name, description, image, released, rating, platforms, genres) => {
	// Verify required data
	if (!name && !description && !platforms) {
		throw Error("Missing required data");
	}
	// Check if platforms and genres is array
	if (!Array.isArray(genres)) throw Error("Genres must to be a array of genres");
	if (!Array.isArray(platforms)) throw Error("Platfoms must to be a array of platforms");

	// Search in DB if videogame is already created
	const gameAlreadyCreated = await Videogame.findOne({ where: { name } });
	if (gameAlreadyCreated) throw Error("The game is already created");

	// Creating new game in DB
	const newGame = await Videogame.create({ name, description, image, released, rating });

	// Create or find all genres from array and add to Game
	genres.forEach(async (e) => {
		let newGenre = await Genre.findOne({ where: { name: e } });
		if (!newGenre) newGenre = await Genre.create({ name: e });
		await newGame.addGenre(newGenre);
	});

	// Same with platforms
	platforms.forEach(async (e) => {
		let newPlatform = await Platform.findOne({ where: { name: e } });
		if (!newPlatform) newPlatform = await Platform.create({ name: e });
		await newGame.addPlatform(newPlatform);
	});
};

module.exports = { createGame };
