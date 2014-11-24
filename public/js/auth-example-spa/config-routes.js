angular.module('auth-example-spa')
  .config(function($routeProvider) {
    'use strict';
    $routeProvider

      .when('/admin', {
        templateUrl: '/views/admin.html',
        controller: 'AdminController'
      })

      .when('/login', {
        templateUrl: '/views/login.html',
        controller: 'LoginController'
      })

      .otherwise({
        redirectTo: '/login'
      })
  })
;