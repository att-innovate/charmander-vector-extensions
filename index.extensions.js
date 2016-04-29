(function () {
    'use strict';

    var containerNameResolver = function($http, $log, $rootScope) {
        var idMap = {};
        var invalid = {};
        var torc = false;
        
        var resolve = function (id, instanceName) {
            if (idMap[id]){
                return idMap[id];
            } else {
                if (!invalid[id]){
                    var url = 'http://' + $rootScope.properties.host + ':' + '31300' + '/getid/';
                    if (torc){
                        url = 'http://' + 'someurlhere' + ':' + '3000' + '/s?id=';
                    }
                    $http.get(url+id)
                    .then(function(response){
                        if (torc){
                            var result = response.data.result;
                            if (result !== '' ){
                                idMap[id]=result;
                            }
                        } else {
                            idMap[id]=response.data;
                        }
                    })
                    .catch(function(){
                        $log.debug('Unexpected response from resolver');
                        invalid[id]=true;
                    });
                    if (instanceName.values[instanceName.values.length-1].y.indexOf('mesos') !==- 1){
                        return id;
                    }
                }
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
