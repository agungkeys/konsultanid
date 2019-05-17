const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
	let errors = {};

	// Convert empty fields to an empty string so we can use validator functions
	data.title = !isEmpty(data.title) ? data.title : "";
	data.description = !isEmpty(data.description) ? data.description : "";

	// Email checks
	if (Validator.isEmpty(data.title)) {
		errors.title = "Title field is required";
	}
	// Password checks
	if (Validator.isEmpty(data.description)) {
		errors.description = "Desc field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
