require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre, Platform } = require("../../db");
const { Op } = require("sequelize");
const { URL, API_KEY } = process.env;
const { cleanDataGames, get100Games } = require("./getGamesFN");

// Games from Database and API by name
const gamesByName = async (name) => {
	// Get all games from Database by name
	const dbGames = await Videogame.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
	// Get all games from API by name
	const apiGames = await axios.get(`${URL}/games?key=${API_KEY}&search=${name}`);
	// Mapping API games
	const games = await cleanDataGames(apiGames.data.results);

	// Only 15 results
	const allGames = [...dbGames, ...games].slice(0, 15);

	// If no results
	if (!allGames.length) throw Error("Games not found");
	return allGames;
};

// Games from Database and API
const getAllGames = async () => {
	// Get all games from Database
	const dbGames = await Videogame.findAll({
		include: [
			{
				model: Genre,
				attributes: ["id", "name"],
				through: {
					attributes: [],
				},
			},
		],
	});

	// Get first 100 games from API
	let apiGames = await get100Games();

	// Creating new array with games
	const games = await cleanDataGames(apiGames);

	const allGames = dbGames.concat(games);

	// If no results
	if (!allGames.length) throw Error("Games not found");

	return allGames;
};

module.exports = { gamesByName, getAllGames };
