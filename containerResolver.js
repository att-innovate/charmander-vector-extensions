'use strict';
function containerResolver(id, hostProperties){
	var deferred = $.Deferred();
	$.get('http://' + hostProperties.host + ':' + '31300' +'/getid/'+id)
	.success(function(response){
	        deferred.resolve(response);
	})
	.error(function(){
	        deferred.resolve(id.substring(0,12));
	});
	return deferred.promise();
}
