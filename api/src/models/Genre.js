const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("genre", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
		},
	});
};
