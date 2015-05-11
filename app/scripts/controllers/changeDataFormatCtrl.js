'use strict';

/**
 * @ngdoc function
 * @name beyandcoreApp.controller:DataSetCtrl
 * @description
 * # DataSetCtrl
 * Controller of the beyandcoreApp
 */
angular.module('beyandcoreApp')
  .controller('changeDataFormatCtrl', function ($scope, $http) {
  	 $http.get('../data/mainContent.json').success(function(Data) {
        $scope.names = Data;
    });
  });
