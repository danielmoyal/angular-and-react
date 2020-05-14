import angular from 'angular';

angular.module('exampleProject')
    .controller('homeController', function ($scope) {
        $scope.message = 'Hi';
    });