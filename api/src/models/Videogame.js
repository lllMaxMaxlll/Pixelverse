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
			// platforms: {
			// 	type: DataTypes.STRING,
			// 	allowNull: false,
			// },
			created: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
		}
	);
};
