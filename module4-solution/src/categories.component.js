(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/categories.component.html',
  controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});

CategoriesComponentController.$inject = ['MenuDataService'];

function CategoriesComponentController(MenuDataService) {
	
	var $ctrl = this;
}

})();