const { Videogame } = require("../../db");

// Delete game with ID from DB
const deleteID_DB = async (id) => {
	await Videogame.destroy({
		where: {
			id,
		},
	});
};

module.exports = { deleteID_DB };
