const ValidationError = require('jsonschema').ValidationError;

const getNewValidationError = (e) => {
	return new ValidationError();
};
const isInstanceOfValidationError = (e) => {
	return e instanceof ValidationError;
};

module.exports = {
	isInstanceOfValidationError,
	getNewValidationError
};