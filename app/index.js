const moduleA = require('module-a');
const moduleB = require('module-b');

const test = () => {
    const validationErrorInstance = moduleB.getNewValidationError();
    console.log(`moduleA thinks validationErrorInstance is instanceof validationError: ${moduleA.isInstanceOfValidationError(validationErrorInstance)}`);
    console.log(`moduleB thinks validationErrorInstance is instanceof validationError: ${moduleB.isInstanceOfValidationError(validationErrorInstance)}`);
}

test();