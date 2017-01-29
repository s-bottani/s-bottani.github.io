(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
.state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    	controller: 'MenuDataController as ctrl',
    	resolve: {
    	      items: ['MenuDataService', function (MenuDataService) {
    	        return MenuDataService.getAllCategories();
    	        
	    	      return MenuDataService.getAllCategories()
	    	      .then(function success(response) {
	    	    	 
	  				return response;
	  			  });
    	        
    	      }]
    	    }
  })
.state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/templates/items.template.html',
    	controller: 'MenuDataController as ctrl',
    	resolve: {
    	      items: ['$stateParams', 'MenuDataService',
    	            function ($stateParams, MenuDataService) {
    	    	     
    	    	      return MenuDataService.getItemsForCategory($stateParams.categoryId)
    	    	      .then(function success(response) {
    	    	    	 
    	  				return response;
    	  			  });
    	            
    	            }]
    	    }
  })
  
  ;
  
}

})();
