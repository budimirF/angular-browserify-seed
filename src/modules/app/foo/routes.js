'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/dashboard', {
              templateUrl: 'app/foo/templates/dashboard.html',
              controller: 'dashboardController'
              // resolve: dashboardController.resolve
            })
            .when('/album/:albumId', {
              templateUrl: 'app/foo/templates/album.html',
              controller: 'albumController'
            })
            .when('/image/:photo_id', {
              templateUrl: 'app/foo/templates/image.html',
              controller: 'imageController'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    };
