(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/items.component.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<'
  }
});

ItemsComponentController.$inject = ['MenuDataService'];

function ItemsComponentController(MenuDataService) {
	
	var $ctrl = this;
	
}

})();


