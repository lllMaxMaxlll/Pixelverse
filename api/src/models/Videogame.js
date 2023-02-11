const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"videogame",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			background_image: {
				type: DataTypes.STRING,
			},
			released: {
				type: DataTypes.DATEONLY,
			},
			rating: {
				type: DataTypes.DECIMAL,
			},
			created: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
