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


Update app.config.js to the following:

    angular
        .module('vector.config')
        .constant('vectorConfig', {
            'protocol': 'http',
            'port': 44323,
            'hostspec': 'localhost',
            'interval': 2,
            'window': 2,
            'enableCpuFlameGraph': false,
            'enableDiskLatencyHeatMap': false,
            'enableContainerWidgets': true, // must be true to use container widgets
        }).constant('containerConfig', {
            'functionName': 'containerResolver', // must match the name of function in containerResolver.js
            'externalAPI': true // must be true to call custom API
        });

The containerResolver.js file should be placed in the vector/src/app/ directory.
