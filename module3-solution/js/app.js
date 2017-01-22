(function () {
'use strict';


angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.component('foundItems', {
	  templateUrl: 'foundListDirective.html',
	  controller: NarrowItDownController,
	  bindings: {
	    foundItems: '<',
	    onRemove: '&'
	  },
	  controllerAs: 'ctrl',
	  bindToController: true
	});

NarrowItDownController.$inject = [ 'MenuSearchService' ];
MenuSearchService.$inject = ['$http'];

function MenuSearchService($http) {

	var service = this;
	var found = [];
	service.getMatchedMenuItems = function(searchTerm) {
		
		return $http({
		  method: 'GET',
		  url: 'http://davids-restaurant.herokuapp.com/menu_items.json'
		}).then(function success(response) {
		    
			var foundItems = response.data;
			return service.narrowList(foundItems,searchTerm);
			//console.log(found);
			//console.log(found.length);
		  });
		
		
	}
	
	service.narrowList = function(items, searchTerm) {
		
		for (var i = 0; i < items.menu_items.length; i++) {
			if (items.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
				found.push(items.menu_items[i]);
			}
		    
		}
		return found;
	}
	
	service.emptyFound = function() {
		found.splice(0, found.length);
	}
	
	service.getFound = function() {
		return found;
	}
	
	service.removeItem = function(index) {
		found.splice(index,1);
	}
	
}

function NarrowItDownController(MenuSearchService) {
	var ctrl = this;
	ctrl.showWarning = false;
	ctrl.found = MenuSearchService.getFound();
	ctrl.getMatchedMenuItems = function(searchTerm){
		MenuSearchService.emptyFound();
		if (searchTerm === undefined || searchTerm.length == 0) {
			ctrl.showWarning = true;
		} else {
			MenuSearchService.getMatchedMenuItems(searchTerm)
			.then(function success(response) {
			    
				if (response === undefined || response.length == 0) {
					ctrl.showWarning = true;
				} else {
					ctrl.showWarning = false;
				}

			  });
			
		}
		
		return ctrl.found;
	}
	
	ctrl.removeItem = function(index) {
		MenuSearchService.removeItem(index);
	}
	
	
}

})();