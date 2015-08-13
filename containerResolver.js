'use strict';
function containerResolver(id){
	var deferred = $.Deferred();
	$.get('http://' + 'slave1' + ':' + '31300' +'/getid/'+id)
	.success(function(response){
	        deferred.resolve(response);
	})
	.error(function(){
	        deferred.resolve(id);
	});
	return deferred.promise();
}