//prevents the user from going to the admin page unless they have logged in
angular.module('auth-example-spa')
  .run(function ($location, $rootScope, authTokenFactory) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      if (!authTokenFactory.getToken()) {
        if (next.templateUrl === '/views/admin.html') {
          $location.path('/login');
        }
      }
    })
  })
;