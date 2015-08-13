# Charmander Vector Extensions

---
This is one implementation of how to call a backend service for resolving dockerId to mesos tasknames.

[Charmander](https://github.com/att-innovate/charmander)
[Charmander-Vector](https://github.com/att-innovate/charmander-vector)

Currently the resolver creates a global dictionary of ids within the ContainerMetadataService.

## Usage
---
The function should return a promise or a http request.

After creating your own custom function, to call it, you only need to add this line to your code.

    ContainerMetadataService.resolveId(instance.key);

ContainerMetadataService will automatically call your function as long as its configured correctly.

## Configuration
---
The filename should be the same as the function name.

Update app.config.js with the file name within containerConfig.functionName

The js file should be placed in the app/ directory.