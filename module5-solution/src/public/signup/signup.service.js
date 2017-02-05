(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService)
.constant('ApiPath', 'https://pacific-castle-29742.herokuapp.com');


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;
  var registeredUser;
  
  service.registerUser = function(user) {
	  registeredUser = user;

  };
  
  service.getRegisteredUser = function() {
	  return registeredUser;
  }
  
  
  service.getItem = function (short_name) {
	    var config = {};
	    
	    if (short_name) {
	      config.params = {'short_name': short_name};
	    }
	    
	    return $http.get(ApiPath + '/menu_items/' + short_name + '.json', config).then(function (response) {
	      return response.data;
	    });
	  };
  

}



})();
