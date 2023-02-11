const { Videogame, Genre, Platform } = require("../../db");

// Create new game
const createGame = async (name, description, image, released, rating, platforms, genres) => {
	// Verify required data
	if (!name && !description && !platforms) {
		throw Error("Missing required data");
	}

	// Search in DB if videogame is already created
	const gameAlreadyCreated = await Videogame.findOne({ where: { name } });
	if (gameAlreadyCreated) throw Error("The game is already created");

	// Creating new game in DB
	const newGame = await Videogame.create({ name, description, image, released, rating });

	const newGenre = await Genre.bulkCreate(
		genres.map((G) => ({
			name: G,
		}))
	);

	const newPlatform = await Platform.bulkCreate(
		platforms.map((G) => ({
			name: G,
		}))
	);

	await newGame.setGenres(newGenre);
	await newGame.setPlatforms(newPlatform);
};

module.exports = { createGame };
