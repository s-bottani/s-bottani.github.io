(function () {
'use strict';

angular.module('data')
.controller('MenuDataController',MenuDataController);

MenuDataController.$inject = ['MenuDataService','items']

function MenuDataController(MenuDataService, items) {
	
	var ctrl = this;
	ctrl.items = items;
	
	
	
	ctrl.getAllCategories = function() {
		alert('chiamato getAllCategories');
		ctrl.categories = MenuDataService.getAllCategories();
		
		
	}
	
	ctrl.getItemsForCategory = function(categoryShortName) {
		MenuDataService.getItemsForCategory(categoryShortName)
		.then(function success(response) {
			console.log(response);
			ctrl.items = response;

		  });
	}
}

})();