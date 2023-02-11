const { Router } = require("express");
const { getGenres } = require("../controllers/genresControllers");
const router = Router();

router.get("/", async (req, res) => {
	try {
		const allGenres = await getGenres();
		res.status(200).json(allGenres);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
