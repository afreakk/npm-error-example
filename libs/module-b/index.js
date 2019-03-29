const ValidationError = require('jsonschema').ValidationError;

const getNewValidationError = (e) => {
	return new ValidationError();
};

module.exports = {
	getNewValidationError
};