Tested with npm version 6.9.0    
`cd app && npm install && node index.js`
will produce:
```
moduleA thinks validationErrorInstance is instanceof validationError: false
moduleB thinks validationErrorInstance is instanceof validationError: true
```

### Details
- libs/module-a depends on jsonschema and has function which returns a instance of ValidationError, and a function which checks if function param is instanceof ValidationError
- libs/module-b depends on jsonschema and has function which checks if function param is instanceof ValidationError
- App depends on libs/module-a and libs/module-b, uses a to get instance of ValidationError and uses b to check if the instance received from a is instanceof ValidationError.
