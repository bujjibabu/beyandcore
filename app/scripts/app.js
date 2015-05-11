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
      $urlRouterProvider.otherwise('/welcome');
       $stateProvider
         // HOME STATES AND NESTED VIEWS ========================================
         .state('welcome', {
            url: '/welcome',
            views:{
              'header@': { templateUrl: 'views/header.html' },
              'main@': {  templateUrl: 'views/welcome.html',
                        controller:'WelcomeCtrl' 
                      },
              'footer@': { templateUrl: 'views/footer.html' }
            }
        })
        .state('changedataformat', {
            url: '/changedataformat',
            views:{
              'header@': { templateUrl: 'views/header.html' },
              'main@': { templateUrl: 'views/changeDataFormat.html',
                        controller:'changeDataFormatCtrl' 
                      },
              'footer@': { templateUrl: 'views/footer.html' }
            }
            
        })
        .state('createdatasubset', {
            url: '/createdatasubset',
            views:{
              'header@': { templateUrl: 'views/header.html' },
              'main@': { templateUrl: 'views/createDataSubset.html',
                        controller:'createDataSubsetCtrl' 
                      },
              'footer@': { templateUrl: 'views/footer.html' }
            }
            
        })
        .state('preparedataset', {
            url: '/preparedataset',
            views:{
              'header@': { templateUrl: 'views/header.html' },
              'main@': { templateUrl: 'views/prepareDataSet.html',
                        controller:'prepareDataSetCtrl' 
                      },
              'footer@': { templateUrl: 'views/footer.html' }
            }
            
        });
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        
  });
