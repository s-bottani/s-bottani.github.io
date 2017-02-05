(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];

function SignupController(SignupService) {
  var reg = this;

  reg.submit = function () {
	console.log(reg.user);
    reg.completed = true;
    SignupService.registerUser(reg.user);
  };
}

})();
