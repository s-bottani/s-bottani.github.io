(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['SignupService'];

function MyInfoController(SignupService) {
  var myInfoCtrl = this;
  var user;
  
  myInfoCtrl.user = SignupService.getRegisteredUser();
  //console.log(myInfoCtrl.user);
  
  console.log(myInfoCtrl.favoriteItem);
  if (myInfoCtrl.user !== undefined) {
	  SignupService.getItem(myInfoCtrl.user.short_name).then(function success(response) {
			myInfoCtrl.favoriteItem = response;
		  });
  }
  
  
  
}

})();
