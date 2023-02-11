// CREA ESTE MODELO Y VINCULALO CON LOS GAMES Y GENRES
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"platform",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
		},
		{
			timestamps: false,
		}
	);
};