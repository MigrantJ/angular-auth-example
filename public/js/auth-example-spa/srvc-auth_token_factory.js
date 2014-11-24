//an interface for the user's localStorage, which holds their auth key
angular.module('auth-example-spa')
  .factory('authTokenFactory', function ($window) {
    var store = $window.localStorage;
    var key = 'auth-token';

    return {
      getToken: function () {
        return store.getItem(key);
      },

      setToken: function (token) {
        if (token) {
          store.setItem(key, token);
        } else {
          store.removeItem(key);
        }
      }
    }
  })
;