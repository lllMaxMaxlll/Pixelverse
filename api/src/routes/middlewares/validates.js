const validateId = (id) => {
	const regexAPI = /^\d+$/;
	const regexBD =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

	// If ID is UUID
	if (isNaN(id) && !regexBD.test(id)) {
		throw Error("ID format not valid");
	}
	// If ID is not only number
	if (!isNaN(id) && !regexAPI.test(id)) {
		throw Error("ID format not valid");
	}
};

module.exports = validateId;
