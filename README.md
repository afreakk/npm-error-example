Tested with npm version 6.9.0    
`cd app && npm install`
will produce:
```
npm ERR! code ENOLOCAL   
npm ERR! Could not install from "../libs/libs/module-b" as it does not contain a package.json file.   
```

### Details
- App depends on module-a
- module-a depends on module-b
