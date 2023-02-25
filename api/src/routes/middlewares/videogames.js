const { Router } = require("express");
const router = Router();
const { gamesByName, getAllGames } = require("../controllers/videogamesControllers");
const { createGame } = require("../controllers/createGameControllers");

router.get("/", async (req, res) => {
	const { name } = req.query;

	try {
		// If receives the name look for it, else send everything
		const games = name ? await gamesByName(name) : await getAllGames();
		res.status(200).json(games);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

router.post("/", async (req, res) => {
	const { name, description, background_image, released, rating, platforms, genres } = req.body;
	console.log(background_image);
	try {
		await createGame(name, description, background_image, released, rating, platforms, genres);
		res.status(201).send("Game created!");
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
