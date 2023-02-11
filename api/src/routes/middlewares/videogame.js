const { Router } = require("express");
const router = Router();
const { findID_DB, findID_API } = require("../controllers/videogameControllers");

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const game = isNaN(id) ? await findID_DB(id) : await findID_API(id);
		res.status(200).json(game);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
