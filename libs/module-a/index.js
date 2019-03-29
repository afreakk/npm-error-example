const ValidationError = require('jsonschema').ValidationError;

const isInstanceOfValidationError = (e) => {
	return e instanceof ValidationError;
};

module.exports = {
	isInstanceOfValidationError
};
