const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("genre", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrenent: true,
			unique: true,
		},
		name: {
			type: DataTypes.STRING,
		},
	});
};
