angular.module('LunchCheck', [])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope, $filter) {
      $scope.lunch = {
        text: '',
        outputMessage: ''
      };
      
      $scope.check = function() {
          //alert($scope.lunch.text);
    	  if ($scope.lunch.text.length == 0) {
    		  $scope.lunch.outputMessage = 'Please enter data first';
    	  } else {
        	  $scope.dishes = $scope.lunch.text.split(',');
        	  if ($scope.dishes.length == 0) {
        		  $scope.lunch.outputMessage = 'Please enter data first';
        	  } else if ($scope.dishes.length <= 3) {
        		  $scope.lunch.outputMessage = 'Enjoy!';
        	  } else {
        		  $scope.lunch.outputMessage = 'Too much!';
        	  }
    	  }

    	  //alert($scope.dishes.length);
    	  
    	  
      };
    }