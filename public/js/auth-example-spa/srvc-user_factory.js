angular.module('auth-example-spa')
  .factory('userFactory', function ($http, $q, authTokenFactory) {
    'use strict';
    return {
      login: function (username, password) {
        return $http.post('/login', {
          username: username,
          password: password
        }).then(function success(response) {
          authTokenFactory.setToken(response.data.token);
          return response;
        });
      },

      logout: function () {
        authTokenFactory.setToken();
      },
      /*
      getUser: function () {
        if (authTokenFactory.getToken()) {
          return $http.get('/admin');
        } else {
          return $q.reject({ data: 'client has no auth token' });
        }
      }
      */
      getUser: function () {
        var deferred = $q.defer();
        var token = authTokenFactory.getToken();

        if (token) {
          deferred.resolve({ data: token });
        } else {
          deferred.reject({ data: 'client has no auth token' });
        }

        return deferred.promise;
      }
    }
  })
;