var WelcomeCtrl = function($scope, CommonFactory) {
  $scope.testVar = CommonFactory.hola;
};

module.exports = WelcomeCtrl;