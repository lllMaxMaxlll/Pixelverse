const validate = (input) => {
	const errors = {};

	const regexName = /^\S[a-z0-9A-Z\s]{1,18}\S$/;
	const regexDescription = /^[,.;:?!-_a-zA-ZÀ-ÿ0-9\s]{10,250}$/u;
	const regexUrl = /(http[s]?:\/\/.*\.(?:png|jpg|webp|gif|svg|jpeg))/i;
	const regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
	const regexNumber = /^(?:[1-4](?:\.\d+)?|5(?:\.0+)?)$/;

	if (!regexName.test(input.name.trim()) || !input.name) {
		errors.name = "Must contain between 3 and 20 characters";
	}
	if (!regexDescription.test(input.description.trim()) || !input.description) {
		errors.description = "Must contain between 10 and 250 characters";
	}
	if (!regexUrl.test(input.background_image)) errors.background_image = "Must be a valid url";
	if (!regexDate.test(input.released)) errors.released = "Must be a valid date";
	if (!regexNumber.test(input.rating)) errors.rating = "Must be a number between 1.0 and 5.0";
	if (!input.genres.length) errors.genres = "Select one or more genres";
	if (!input.platforms.length) errors.platforms = "Select one or more platforms";

	return errors;
};

export default validate;
