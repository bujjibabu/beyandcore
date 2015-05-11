'use strict';
/**
 * @ngdoc function
 * @name beyandcoreApp.controller:DataTransformationCtrl
 * @description
 * # DataTransformationCtrl
 * Controller of the beyandcoreApp
 */
angular.module('beyandcoreApp')
  .controller('createDataSubsetCtrl', function ($scope, $http) {
  	 $http.get('../data/mainContent.json').success(function(Data) {
        $scope.names = Data;
    });
  });

