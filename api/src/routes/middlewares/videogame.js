const { Router } = require("express");
const router = Router();
const { findID_DB, findID_API } = require("../controllers/videogameControllers");
const validateId = require("./validates");
const { deleteID_DB } = require("../controllers/deleteGame");

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		// Check if ID is only number or correct UUID format
		validateId(id);
		// If ID is a number, search in API, else search in DB
		const game = isNaN(id) ? await findID_DB(id) : await findID_API(id);
		res.status(200).json(game);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		// Check if ID is correct UUID format
		validateId(id);
		await deleteID_DB(id);
		res.status(200).send("Game deleted");
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
