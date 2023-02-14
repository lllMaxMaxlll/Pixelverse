const { Router } = require("express");
const { getPlatforms } = require("../controllers/platformsControllers");
const router = Router();

router.get("/", async (req, res) => {
	try {
		const allPlatforms = await getPlatforms();
		res.status(200).json(allPlatforms);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
