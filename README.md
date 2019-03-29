Tested with npm version 6.9.0    
`cd app && npm install && node index.js`
will produce:
```
is instanceof validationError: false
```

### Details
- libs/module-a depends on jsonschema and has 1 function which returns a instance of ValidationError
- libs/module-b depends on jsonschema and has 1 functiok which checks if function param is instanceof ValidationError
- App depends on libs/module-a and libs/module-b, uses a to get instance of ValidationError and uses b to check if the instance received from a is instanceof ValidationError.
