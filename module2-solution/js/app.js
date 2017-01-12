angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = [ 'ShoppingListCheckOffService' ];
AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService' ];
ShoppingListCheckOffService.$inject = [];

function ShoppingListCheckOffService() {

	var service = this;
	var toBuyList = [ {
		name : "cookie",
		quantity : 10
	}, {
		name : "apple",
		quantity : 2
	}, {
		name : "orange",
		quantity : 5
	}, {
		name : "salad",
		quantity : 7
	}, {
		name : "cake",
		quantity : 8
	} ];

	var boughtList = [];
	
	service.getToBuyList = function() {
		return toBuyList;
	}
	
	service.getBoughtList = function() {
		return boughtList;
	}

	service.buy = function(index) {
		boughtList.push(toBuyList[index]);
		toBuyList.splice(index, 1);
	}

}

function ToBuyController(ShoppingListCheckOffService) {

	//$scope.toBuyList = ShoppingListCheckOffService.toBuyList;
	var toBuy = this;
	toBuy.list = ShoppingListCheckOffService.getToBuyList();
	this.buy = function(item){
		// alert(item);
		ShoppingListCheckOffService.buy(item);
	}
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
	var bought = this;
	bought.list = ShoppingListCheckOffService.getBoughtList();
}
