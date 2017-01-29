(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http']

function MenuDataService($http) {
	
	var service = this;
	
	service.getAllCategories = function() {
		return $http({
			  method: 'GET',
			  url: 'https://davids-restaurant.herokuapp.com/categories.json'
			}).then(function success(response) {
			    //console.log(response.data);
			    
				return response.data;
			  });
	}
	
	service.getItemsForCategory = function(categoryShortName) {
		//alert('category'+categoryShortName);
		return $http({
			  method: 'GET',
			  url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
			  params: {'category': categoryShortName}
			}).then(function success(response) {
			    //alert(response.data);
				
				return response.data;
			  });
	}
	
}

})();