angular.module('auth-example-spa')
  .controller('LoginController', function ($scope, $location, userFactory) {
    'use strict';

    //checks to see if the user has already been authed and stores their token locally if so
    userFactory.getUser().then(function (response) {
      $scope.user = response.data;
    });

    $scope.form = {};
    $scope.form.login = function (username, password) {
      userFactory.login(username, password)
        .then(function (response) {
          $scope.user = response.data.user;
          $location.path('/admin');
        },
      $scope.handleError);
    };

    $scope.form.logout = function () {
      userFactory.logout();
      $scope.user = null;
    };

    $scope.handleError = function (response) {
      alert('Error: ' + response.data);
    };
  })
;