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
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/main');
       $stateProvider
         // HOME STATES AND NESTED VIEWS ========================================
        .state('dataset', {
            url: '/dataset',
            views:{
              'header@': { templateUrl: 'views/header.html' },
              'main@': { templateUrl: 'views/dataSets.html',
                        controller:'DataSetCtrl' 
                      },
              'footer@': { templateUrl: 'views/footer.html' }
            }
            
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('main', {
            url: '/main',
            views:{
              'header@': { templateUrl: 'views/header.html' },
              'main@': {  templateUrl: 'views/main.html',
                        controller:'MainCtrl' 
                      },
              'footer@': { templateUrl: 'views/footer.html' }
            }
        });
  });
