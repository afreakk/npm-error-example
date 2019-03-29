const moduleA = require('module-a');
const moduleB = require('module-b');

const test = () => {
    const validationErrorInstance = moduleB.getNewValidationError();
    console.log(`is instanceof validationError: ${moduleA.isInstanceOfValidationError(validationErrorInstance)}`);
}

test();