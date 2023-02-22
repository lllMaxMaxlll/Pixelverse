const validate = (input) => {
	const errors = {};

	const regexText = /\w\d/gi;
	const regexUrl =
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gi;
	const regexDate =
		/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
	const regexNumber = /(\d)*$/gi;

	if (!regexText.test(input.name)) errors.name = "Must be a valid text, no symbols";
	if (!regexText.test(input.description)) errors.description = "Must be a valid text, no symbols";
	if (!regexUrl.test(input.imageURL)) errors.imageURL = "Must be a valid url";
	if (!regexDate.test(input.released)) errors.released = "Must be a valid url";
};

export default validate;
