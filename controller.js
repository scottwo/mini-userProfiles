angular.module('userProfiles')
    .controller('MainController', ['$scope', 'mainService', function($scope, mainService) {
        $scope.getUsers = mainService.getUsers;
        $scope.users = $scope.getUsers();
}]);