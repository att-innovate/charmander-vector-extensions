(function () {
    'use strict';

    var containerNameResolver = function($http) {
        var idMap = {};

        var resolve = function (id, instanceName) {
            //console.log('instanceName:',instanceName);
            if (idMap[id]){
                return idMap[id];
            } else {
                var url = 'urlhere';
                $http.get(url)
                .then(function(response){
                    if (response !== '' )
                        idMap[id]=response.data.result;
                })
                .catch(function(){
                    console.log('unexpected results from resolver');
                });
                if (instanceName.values[instanceName.values.length-1].y.indexOf('mesos') !==- 1)
                    return id;
            }
        };

        return {
          resolve: resolve
        };
    };

    angular
        .module('vector')
        .factory('containerNameResolver', containerNameResolver)
        ;
})();
