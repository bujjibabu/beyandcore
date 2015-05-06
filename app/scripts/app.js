'use strict';

/**
 * @ngdoc overview
 * @name beyandcoreApp
 * @description
 * # beyandcoreApp
 *
 * Main module of the application.
 */
angular
  .module('beyandcoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dataset', {
        templateUrl: 'views/dataSets.html',
        controller: 'DataSetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
