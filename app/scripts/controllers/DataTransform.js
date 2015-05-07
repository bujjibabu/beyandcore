'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:scenariosCtrl
 * @description
 * # scenariosCtrl
 * Controller of the myApp
 */
angular.module('myApp', [])
  .controller('scenariosCtrl', function($scope, $http) {
     $http.get('scripts/mainContent.json').success(function(bookData) {
        $scope.names = bookData;
         console.log( $scope.names);
    });
  });